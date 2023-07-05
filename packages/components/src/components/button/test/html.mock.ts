import { mixMembers } from 'stencil-awesome-test';
import { ButtonProps, ButtonStates } from '../../../types/button-link';
import { getSpanWcHtml } from '../../span/test/html.mock';

type Slots = {
	expert?: string;
};

export const getButtonWcHtml = (
	props: ButtonProps,
	slots: Slots = {
		expert: undefined,
	},
	additionalAttrs = ''
): string => {
	const state = mixMembers<ButtonProps, ButtonStates>(
		{
			_icon: {},
			_label: '…', // ⚠ required
			_type: 'button',
			_variant: 'normal',
		},
		props
	);
	const ariaControls = typeof state._ariaControls === 'string' ? state._ariaControls : undefined;
	const ariaExpanded = typeof state._ariaExpanded === 'boolean' ? state._ariaExpanded : undefined;
	const type = typeof state._type === 'string' ? state._type : 'button';
	const variant = typeof state._variant === 'string' ? state._variant : 'normal';
	return `<kol-button-wc${additionalAttrs}>
	<button${ariaControls ? ' aria-controls="nonce"' : ''}${
		typeof state._ariaExpanded === 'boolean' ? ` aria-expanded="${ariaExpanded === true ? 'true' : 'false'}"` : ''
	} class="${variant}" type="${type}">
		${getSpanWcHtml(props, slots)}
	</button>
	<kol-tooltip aria-hidden="true" hidden>
	  <div id="floating">
	    <div class="area" id="arrow"></div>
	    <kol-span-wc class="area" id="nonce">
	      <span>
	        <span>
	          ${props._label ? props._label : '…'}
	        </span>
	        <span aria-hidden="true" hidden=""></span>
	      </span>
	    </kol-span-wc>
	  </div>
	</kol-tooltip>
</kol-button-wc>`;
};

export const getButtonHtml = (props: ButtonProps): string => {
	const state = mixMembers<ButtonProps, ButtonStates>(
		{
			_icon: {},
			_label: '…', // ⚠ required
			_type: 'button',
			_variant: 'normal',
		},
		props
	);
	return `<kol-button>
  <mock:shadow-root>
    ${getButtonWcHtml(
			props,
			{
				expert: `<slot name="expert" slot="expert"></slot>`,
			},
			` class="button ${state._variant}"`
		)}
  </mock:shadow-root>
</kol-button>`;
};
