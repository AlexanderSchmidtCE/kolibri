import React from 'react';
import { KolButton } from '@public-ui/react';

import { FC } from 'react';
import { SampleDescription } from '../SampleDescription';

export const ButtonBaselined: FC = () => (
	<>
		<SampleDescription>
			<p>Hier verstehe ich Baselined nicht!</p>
		</SampleDescription>
		<div className="inline-block">
			<KolButton _label="Label-Text"></KolButton>
			<KolButton _label="Label-Text"></KolButton>
			<KolButton _label="Label-Text"></KolButton>
			<KolButton _icons="codicon codicon-reactions" _label="Label-Text with Icon"></KolButton>
		</div>
	</>
);
