import { Generic } from '@a11y-ui/core';
import { WatchOptions, watchValidator } from '../../utils/prop.validators';
import { Stringified } from '../common';
import { ColorContrast, createContrastColorPair } from '../../components/badge/contrast';
import { a11yHint } from '../../utils/a11y.tipps';

/* types */
type CharacteristicColors = {
	primary: string;
	secondary: string;
	neutral: string;
};

export type ColorPair = {
	backgroundColor: string;
	foregroundColor: Stringified<CharacteristicColors>;
};

/**
 * @deprecated
 */
type DeprecatedColorPair = {
	backgroundColor: string;
	/**
	 * @deprecated Please use `foregroundColor` instead of `color`.
	 */
	color: string;
};

export type PropColor = ColorPair | DeprecatedColorPair;

type typeOfColorType = 'string' | 'ColorPair' | 'DeprecatedColorPair' | null;

const HEX_REGEX = /^#((\d|[a-f]){6}|(\d|[a-f]){3})$/i;
function isHexString(value: string): boolean {
	return HEX_REGEX.test(value);
}
/* checks if the string is valid JSON and if the resulting object is a valid ColorPair or DeprecatedColorPair and returns it, or null if invalid. */
function isColorObjectString(value: string): { type: typeOfColorType; value: PropColor | null } {
	if (value.startsWith('{')) {
		try {
			const parsed = JSON.parse(value) as unknown;
			if (isValidColorPair(parsed as ColorPair)) return { type: 'ColorPair', value: parsed as ColorPair };
			if (isValidDeprecatedColorPair(parsed as DeprecatedColorPair)) return { type: 'DeprecatedColorPair', value: parsed as DeprecatedColorPair };
		} catch (error) {
			return { type: null, value: null };
		}
	}
	return { type: null, value: null };
}

function typeOfColor(value?: unknown): { type: typeOfColorType; valid: boolean; value: PropColor | string } {
	if (value) {
		if (typeof value === 'string') {
			if (isHexString(value)) return { type: 'string', valid: true, value: value };
			else {
				const colorObject = isColorObjectString(value);
				if (colorObject.value) return { type: colorObject.type, valid: true, value: colorObject.value };
			}
		} else {
			const asColorPair = value as ColorPair;
			if (isValidColorPair(asColorPair)) return { type: 'ColorPair', valid: true, value: asColorPair };
			const asDeprecatedColorPair = value as DeprecatedColorPair;
			if (isValidDeprecatedColorPair(asDeprecatedColorPair)) return { type: 'DeprecatedColorPair', valid: true, value: asDeprecatedColorPair };
		}
	}
	return { type: null, valid: false, value: '' };
}

/* validate different color options */
function isValidColorPair(value: ColorPair): boolean {
	return (
		typeof value === 'object' &&
		value &&
		typeof value.backgroundColor === 'string' &&
		(typeof value.foregroundColor === 'string' ||
			(value.foregroundColor &&
				typeof value.foregroundColor.primary === 'string' &&
				typeof value.foregroundColor.secondary === 'string' &&
				typeof value.foregroundColor.neutral === 'string'))
	);
}
function isValidDeprecatedColorPair(value: DeprecatedColorPair): boolean {
	return typeof value === 'object' && value && typeof value.backgroundColor === 'string' && typeof value.color === 'string';
}

function validatorFunction(value?: Stringified<PropColor>): boolean {
	const valueType = typeOfColor(value);
	switch (valueType.type) {
		case null:
			return false;
		case 'string':
		case 'ColorPair':
		case 'DeprecatedColorPair':
			return valueType.valid;
	}
}

/* validator */
export const validateColor = (component: Generic.Element.Component, value?: Stringified<PropColor>, options?: WatchOptions): void => {
	watchValidator(component, '_color', validatorFunction, new Set(['rgb in hex', 'ColorPair']), value, options);
};

export const handleColorChange = (value: unknown): ColorPair => {
	let colorContrast: ColorContrast<string>;
	const valueType = typeOfColor(value);
	switch (valueType.type) {
		case 'string':
			colorContrast = createContrastColorPair(valueType.value as string);
			break;
		case 'ColorPair':
		case 'DeprecatedColorPair': {
			const asColorPair = valueType.value as ColorPair;
			const asDeprecatedColorPair = valueType.value as DeprecatedColorPair;
			let foreground = '';
			if (asDeprecatedColorPair.color) foreground = asDeprecatedColorPair.color;
			else {
				if (typeof asColorPair.foregroundColor === 'string') foreground = asColorPair.foregroundColor;
				else if (asColorPair.foregroundColor?.primary) foreground = asColorPair.foregroundColor.primary;
			}
			if (!foreground || typeof foreground !== 'string') foreground = '#fff';
			colorContrast = createContrastColorPair({
				background: asColorPair.backgroundColor,
				foreground,
			});
			break;
		}
		case null:
			console.warn(`_color was empty or invalid (${JSON.stringify(value)})`);
			colorContrast = createContrastColorPair({
				background: '#000',
				foreground: '#000',
			});
	}

	if (colorContrast.contrast < 7) {
		a11yHint(
			`[KolBadge] The contrast of ${colorContrast.contrast} (≥7, AAA) is too low, between the color pair ${colorContrast.background} and ${colorContrast.foreground}.`
		);
	}
	return {
		backgroundColor: colorContrast.background,
		foregroundColor: colorContrast.foreground,
	};
};
