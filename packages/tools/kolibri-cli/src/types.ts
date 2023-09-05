export const FILE_EXTENSIONS = ['html', 'js', 'json', 'jsx', 'ts', 'tsx', 'vue'] as const;
export type FileExtension = (typeof FILE_EXTENSIONS)[number];

export const COMPONENT_FILE_EXTENSIONS: FileExtension[] = ['jsx', 'tsx', 'vue'];
export const CUSTOM_ELEMENT_FILE_EXTENSIONS: FileExtension[] = ['html', 'jsx', 'tsx', 'vue'];

export type PackageJson = {
	name: string;
	version: string;
	scripts?: { [key: string]: string };
	dependencies?: { [key: string]: string };
	devDependencies?: { [key: string]: string };
	peerDependencies?: { [key: string]: string };
};
