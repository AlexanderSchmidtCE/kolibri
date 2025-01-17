import React from 'react';

import { KolButtonLink } from '@public-ui/react';

import type { FC } from 'react';
import { SampleDescription } from '../SampleDescription';

export const ButtonLinkIcons: FC = () => (
	<>
		<SampleDescription>
			<p>This sample shows KolButtonLink with icons in different locations.</p>
		</SampleDescription>

		<div className="grid gap-4">
			<KolButtonLink _icons="codicon codicon-home" _label="Ich bin ein Link mit Icon links" />
			<KolButtonLink
				_icons={{
					right: 'codicon codicon-home',
				}}
				_label="I am a link with an icon on the right"
			/>
			<KolButtonLink
				_icons={{
					top: 'codicon codicon-home',
				}}
				_label="I am a link with an icon at the top"
			/>
			<KolButtonLink
				_icons={{
					bottom: 'codicon codicon-home',
				}}
				_label="I am a link with icon below"
			/>
			<KolButtonLink
				_icons={{
					top: 'codicon codicon-home',
					right: 'codicon codicon-home',
					bottom: 'codicon codicon-home',
					left: 'codicon codicon-home',
				}}
				_label="I am a link with all icons"
			/>
		</div>
	</>
);
