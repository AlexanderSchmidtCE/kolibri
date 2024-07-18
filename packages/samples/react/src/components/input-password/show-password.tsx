import type { FC } from 'react';
import React, { useRef } from 'react';

import { KolForm, KolInputPassword } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

export const InputPasswordShowPassword: FC = () => {
	const passwordRef = useRef<HTMLKolInputPasswordElement>(null);

	return (
		<>
			<SampleDescription>
				<p>
					This sample shows KolInputPassword in the variant &quot;visibility-toggle&quot;. It features a button to toggle between a visible and hidden password
					input.
				</p>
			</SampleDescription>

			<KolForm>
				<KolInputPassword _placeholder="Mit 'Passwort anzeigen' Button" _label="Passwort" ref={passwordRef} className="block" _variant="visibility-toggle" />
				<KolInputPassword
					_placeholder="Mit 'Passwort anzeigen' Button und disabled"
					_label="Passwort"
					ref={passwordRef}
					className="block"
					_disabled
					_variant="visibility-toggle"
				/>
			</KolForm>
		</>
	);
};
