import React from 'react';

import { KolVersion } from '@public-ui/react';

import type { FC } from 'react';
import { SampleDescription } from '../SampleDescription';

export const VersionContext: FC = () => (
	<>
		<SampleDescription>
			<p>Hier ist die Standardversionsnummer mit Text.</p>
		</SampleDescription>
		<p>
			<KolVersion _label="1.0.0" /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
			aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
		</p>
	</>
);
