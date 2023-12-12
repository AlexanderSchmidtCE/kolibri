import { Generic } from 'adopted-style-sheets';

import { watchBoolean } from '../../utils/prop.validators';

/* types */
export type CollapsiblePropType = boolean;

/**
 * Defines if navigation nodes can be collapsed or not.
 */
export type PropCollapsible = {
	collapsible: CollapsiblePropType;
};

/* validator */
export const validateCollapsible = (component: Generic.Element.Component, value?: CollapsiblePropType): void => {
	watchBoolean(component, '_collapsible', value);
};
