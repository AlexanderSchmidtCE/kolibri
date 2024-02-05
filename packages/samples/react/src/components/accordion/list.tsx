import React, { FC } from 'react';
import { KolAccordion } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

const LIST = [
	{
		heading: 'Überschrift Accordion Tab 1',
		content: 'Inhalt Accordion Tab 1',
	},
	{
		heading: 'Überschrift Accordion Tab 2',
		content: 'Inhalt Accordion Tab 2',
	},
	{
		heading: 'Überschrift Accordion Tab 3',
		content: 'Inhalt Accordion Tab 3',
	},
];

export const AccordionList: FC = () => (
	<>
		<SampleDescription>
			<p>Beim klicken mit der Maus auf die einzelnen Überschriften, soll der Inhalt darunter aufgeklappt und beim erneuten klicken wieder zugeklappt werden.</p>
		</SampleDescription>
		<div className="grid gap-4">
			{LIST.map(({ heading, content }, index) => (
				<KolAccordion _label={heading} _level={1} _open={index === 1} key={index}>
					<p>{content}</p>
				</KolAccordion>
			))}
		</div>
	</>
);
