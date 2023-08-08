import { Generic } from '@a11y-ui/core';

import { objectObjectHandler, parseJson, watchValidator } from '../../utils/prop.validators';
import { isObject, isString, isStyle } from '../../utils/validator';
import { ButtonStates } from '../button-link';
import { Stringified } from '../common';
import { AnyIconFontClass, KoliBriCustomIcon, KoliBriIconProp, KoliBriIconState } from '../icon';
import { AlignPropType } from './align';

/* types */
type IconPropType = Stringified<KoliBriIconProp>;

/**
 * Puts the checkbox in the indeterminate state, does not change the value of _checked.
 */
export type PropIcon = {
	icon: IconPropType;
};

/* validator */

const mapCustomIcon = (state: KoliBriIconState, alignment: AlignPropType, icon?: AnyIconFontClass | KoliBriCustomIcon) => {
	if (isObject(icon)) {
		state[alignment] = icon as KoliBriCustomIcon;
	} else if (isString(icon, 1)) {
		state[alignment] = {
			icon: icon as AnyIconFontClass,
		};
	}
};

export const mapIconProp2State = (icon: KoliBriIconProp, iconAlign?: AlignPropType): KoliBriIconState => {
	let state: KoliBriIconState = {};
	if (isString(icon, 1)) {
		switch (iconAlign) {
			case 'right':
				state = {
					right: {
						icon: icon as AnyIconFontClass,
					},
				};
				break;
			default:
				state = {
					left: {
						icon: icon as AnyIconFontClass,
					},
				};
		}
	} else if (typeof icon === 'object' && icon !== null) {
		mapCustomIcon(state, 'top', icon.top);
		mapCustomIcon(state, 'right', icon.right);
		mapCustomIcon(state, 'bottom', icon.bottom);
		mapCustomIcon(state, 'left', icon.left);
	}
	return state;
};

const beforePatchIcon = (component: Generic.Element.Component): void => {
	if (component.nextState?.has('_icon')) {
		const icon = component.nextState?.get('_icon') as KoliBriIconProp;
		const iconAlign = (component.nextState?.get('_iconAlign') as AlignPropType) || (component.state as ButtonStates)._iconAlign;
		component.nextState?.set('_icon', mapIconProp2State(icon, iconAlign));
	} else if (component.nextState?.has('_iconAlign')) {
		const lastIconAlign = (component.state as ButtonStates)._iconAlign as AlignPropType;
		component.nextState?.set('_icon', {
			[lastIconAlign]: undefined,
			[component.nextState?.get('_iconAlign') as AlignPropType]: (component.state as ButtonStates)._icon[lastIconAlign],
		});
	}
};

export const isIcon = (value?: unknown): boolean =>
	typeof value === 'object' &&
	value !== null &&
	(typeof (value as KoliBriCustomIcon).style === 'undefined' || isStyle((value as KoliBriCustomIcon).style)) &&
	isString((value as KoliBriCustomIcon).icon, 1);

export const validateIcon = (component: Generic.Element.Component, value?: IconPropType): void => {
	objectObjectHandler(value, () => {
		try {
			value = parseJson<KoliBriIconProp>(value as string);
		} catch (e) {
			// value behält den ursprünglichen Wert
		}
		watchValidator(
			component,
			'_icon',
			(value): boolean => {
				return (
					value === null ||
					isString(value, 1) ||
					(typeof value === 'object' &&
						value !== null &&
						(isString(value.left, 1) ||
							isIcon(value.left) ||
							isString(value.right, 1) ||
							isIcon(value.right) ||
							isString(value.top, 1) ||
							isIcon(value.top) ||
							isString(value.bottom, 1) ||
							isIcon(value.bottom)))
				);
			},
			new Set(['KoliBriIcon']),
			value,
			{
				hooks: {
					beforePatch: (nextValue: unknown, nextState: Map<string, unknown>) => {
						if (nextValue === null) {
							nextState.set('_icon', {});
						}
						beforePatchIcon(component);
					},
				},
				required: true,
			}
		);
	});
};

export const watchIconAlign = (component: Generic.Element.Component, value?: AlignPropType): void => {
	watchValidator(component, '_iconAlign', (value) => value === 'left' || value === 'right', new Set(['Alignment {left, right, top, bottom}']), value, {
		hooks: {
			beforePatch: () => {
				beforePatchIcon(component);
			},
		},
	});
};
