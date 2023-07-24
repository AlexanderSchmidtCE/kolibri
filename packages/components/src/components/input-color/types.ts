import { Generic } from '@a11y-ui/core';

import { ButtonProps } from '../../types/button-link';
import { Stringified } from '../../types/common';
import { KoliBriHorizontalIcon } from '../../types/icon';
import { InputTypeOnDefault, InputTypeOnOff } from '../../types/input/types';
import { PropLabelWithExpertSlot } from '../../types/props/label';
import { InputRequiredProps } from '../input/types';
import { PropSuggestions } from '../../types/props/suggestions';

type RequiredProps = InputRequiredProps;
type OptionalProps = {
	accessKey: string;
	alert: boolean;
	autoComplete: InputTypeOnOff;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: Stringified<KoliBriHorizontalIcon>;
	/**
	 * @deprecated Use _suggestions instead.
	 */
	list: Stringified<string[]>;
	name: string;
	on: InputTypeOnDefault;
	smartButton: Stringified<ButtonProps>;
	syncValueBySelector: string;
	touched: boolean;
	tabIndex: number;
	value: string;
} & PropSuggestions;
export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = {
	autoComplete: InputTypeOnOff;
	id: string;
	suggestions: string[];
} & PropLabelWithExpertSlot;
type OptionalStates = {
	accessKey: string;
	alert: boolean;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: KoliBriHorizontalIcon;
	name: string;
	on: InputTypeOnDefault;
	smartButton: ButtonProps;
	touched: boolean;
	tabIndex: number;
	value: string;
};

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;

export type Watches = Generic.Element.Watchers<RequiredProps, OptionalProps>;

export type ComponentApi = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
