import type { FC } from 'react';
import React, { useRef } from 'react';

import { KolButton, KolCard, KolModal } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

export const ModalBasic: FC = () => {
	const modalElement = useRef<HTMLKolModalElement>(null);
	const stackedModalElement = useRef<HTMLKolModalElement>(null);

	return (
		<>
			<SampleDescription>
				<p>
					KolModal renders content in a popover, disabling interactivity with elements behind it. In the sample, the modal can be opened and closed using the
					buttons &quot;Open modal&quot; and &quot;Close modal&quot;.
				</p>
			</SampleDescription>

			<div>
				<KolModal _label="Primary modal" _width="80%" ref={modalElement} _on={{ onClose: () => console.log('Modal closed') }}>
					<KolCard _label="I am a modal.">
						<KolButton
							_label="Open stacked modal"
							className="mr"
							_on={{
								onClick: () => {
									stackedModalElement.current?.openModal();
								},
							}}
						/>

						<KolButton
							_label="Close modal"
							_on={{
								onClick: () => {
									modalElement.current?.closeModal();
								},
							}}
						/>
					</KolCard>
				</KolModal>

				<KolModal _label="Stacked modal" _width="80%" ref={stackedModalElement}>
					<KolCard _label="Stacked modal element">
						<KolButton
							_label="Close stacked modal"
							_on={{
								onClick: () => {
									stackedModalElement.current?.closeModal();
								},
							}}
						/>
					</KolCard>
				</KolModal>

				<KolButton
					_label="Open modal"
					_on={{
						onClick: () => {
							modalElement.current?.openModal();
						},
					}}
				/>
			</div>
		</>
	);
};
