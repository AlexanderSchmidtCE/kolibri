import React from 'react';
import { KolPagination } from '@public-ui/react';

import { FC } from 'react';
import { SampleDescription } from '../SampleDescription';

export const PaginationBasic: FC = () => (
	<>
		<SampleDescription>
			<p>
				Hier sind fünf Beispiele für eine Paginierung oder Seitennummerierung. Unten Rechts kann zwischen zwei Optionen für die Seitengröße gewechselt werden.
			</p>
		</SampleDescription>
		<div className="grid gap-4">
			<KolPagination _max={10} _page={6} _siblingCount={0} _label="Test Paginierung 1" _on={{}} />
			<KolPagination _max={6} _page={6} _siblingCount={0} _boundaryCount={2} _label="Test Paginierung 2" _on={{}} />
			<KolPagination _max={4} _page={1} _siblingCount={0} _boundaryCount={2} _label="Test Paginierung 3" _on={{}} />
			<KolPagination _max={4} _page={6} _siblingCount={0} _boundaryCount={2} _hasButtons={false} _label="Test Paginierung 4" _on={{}} />
			<KolPagination
				_max={4}
				_page={6}
				_siblingCount={0}
				_boundaryCount={2}
				_hasButtons={false}
				_label="Test Paginierung 4"
				_on={{}}
				_pageSizeOptions={[10, 100]}
			/>
		</div>
	</>
);
