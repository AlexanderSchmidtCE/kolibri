/* types */
import { Generic } from 'adopted-style-sheets';
import { watchString } from '../../utils/prop.validators';

export type AlternativeButtonLinkRolePropType = 'button' | 'link' | 'tab';

/**
 * Defines the role of the components primary element.
 */
export type PropAlternativeButtonLinkRole = {
	role: AlternativeButtonLinkRolePropType;
};

/* validator */
export const validateAlternativeButtonLinkRole = (component: Generic.Element.Component, value?: AlternativeButtonLinkRolePropType) => {
	watchString(component, '_role', value);
};
