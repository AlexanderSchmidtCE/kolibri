import { getThemeDetails, setThemeStyle } from '@a11y-ui/core';
import { setMode } from '@stencil/core';
import { Log } from '../utils/log';

// ts-prune-ignore-next
export default (): void => {
	Log.debug(
		`
,--. ,--.         ,--. ,--. ,-----.           ,--.
|  .'   /  ,---.  |  | \`--' |  |) /_  ,--.--. \`--'
|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.
|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |
\`--' \`--´  \`---´  \`--' \`--' \`------´  \`--'    \`--'
🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io
	`,
		{
			forceLog: true,
		}
	);

	setMode((elm) => {
		if (elm.shadowRoot instanceof ShadowRoot) {
			setThemeStyle(elm, getThemeDetails(elm));
		}
		return 'default';
	});

	import('./devtools')
		.then((devTools) => {
			if (typeof devTools === 'object' && devTools !== null && typeof devTools.initialize === 'function') {
				devTools.initialize();
			}
		})
		.catch((error) => {
			Log.error(error);
		});
};
