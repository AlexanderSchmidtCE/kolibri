import type { InputFileProps, InputFileStates } from '@public-ui/schema';
import { mixMembers } from 'stencil-awesome-test';
import { nonce } from '../../../utils/dev.utils';
import { KolInputTag } from '../../../core/component-names';
import { showExpertSlot } from '@public-ui/schema';
import { getRenderStates } from '../../input/controller';

export const getInputFileHtml = (props: InputFileProps): string => {
	const state = mixMembers<InputFileProps, InputFileStates>(
		{
			_hideError: false,
			_id: `id-${nonce()}`,
			_label: '', // ⚠ required
		},
		props,
	);
	const hasExpertSlot = showExpertSlot(state._label);
	const { ariaDescribedBy } = getRenderStates(state);
	return `
	<kol-input-file class="kol-input-file" ${state._readOnly ? `_readonly=""` : ''} ${state._touched ? `_touched=""` : ''} ${state._alert || state._alert === undefined ? `_alert=""` : ''} >
	   <mock:shadow-root>
	     <${KolInputTag}
					${state._disabled ? `_disabled=""` : ''}
					${state._hideLabel ? `_hideLabel=""` : ''}
					${state._required ? `_required=""` : ''}
					${state._touched ? `_touched=""` : ''}
					_hint=""
					_id="${state._id}"
					_label="${state._label ? `${state._label}` : ''}"
					_tooltipalign="top"
					class="file ${state._hideLabel ? `hide-label` : ''}"
					>

			 <span slot="label"> ${
					hasExpertSlot
						? `<slot name="expert"></slot> `
						: typeof state._accessKey === 'string'
							? `<>
						 <InternalUnderlinedAccessKey  label="${state._label}" />
						 <span class="access-key-hint" aria-hidden="true">
						 ${state._accessKey}
						 </span>
					 </> `
							: ` <span>${state._label}</span> `
				}</span>
	       <div slot="input">
	        	<input
							${state._disabled ? `disabled=""` : ''}
							${state._hideLabel && typeof state._label === 'string' ? `aria-label="${state._label}"` : ''}
							autocapitalize="off"
							autocorrect="off"
							id="${state._id}"
							spellcheck="false"
							type="file"
							${state._required ? `required=""` : ''}
							${ariaDescribedBy.length > 0 ? `aria-describedby="${ariaDescribedBy.join(' ')}"` : ''}
						>
	       </div>
	     </${KolInputTag}>
	   </mock:shadow-root>
	</kol-input-file>`;
};
