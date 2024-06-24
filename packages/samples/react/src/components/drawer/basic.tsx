import type { FC } from 'react';
import React, { useRef } from 'react';

import { KolDrawer, KolButton } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

export const DrawerBasic: FC = () => {
	const drawerElement = useRef<HTMLKolDrawerElement>(null);
	return (
		<>
			<SampleDescription>
				<p>
					Hier ist ein Beispiel für ein Drawer. Es lässt sich öffnen und schließen mit Methoden. Dadurch erscheint ein Popup mit Text und &apos;Schließen&apos;
					Button. Durch anklicken des &apos;Schließen&apos; Button, schließt sich das Modal wieder.
				</p>
			</SampleDescription>
			<div>
				<KolDrawer ref={drawerElement} _label="Ich bin ein Drawer" _on={{ onClose: () => console.log('Drawer onClose triggered!') }}>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
							diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
							sit amet.
						</p>
						<KolButton _label="Close drawer" _on={{ onClick: () => drawerElement.current?.close()}}/>
					</div>
				</KolDrawer>
				<KolButton _label="Open drawer" _on={{ onClick: () => drawerElement.current?.open()}}/>
			</div>
		</>
	);
};
