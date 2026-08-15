import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

// List all theme files in the css/theme directory
const themeFiles = fs
	.readdirSync(resolve(__dirname, 'css/theme'))
	.filter((file) => file.endsWith('.scss'));

const themeEntries = themeFiles.reduce((acc, file) => {
	acc[`theme/${file.replace('.scss', '')}`] = resolve(__dirname, `css/theme/${file}`);
	return acc;
}, {});

export default defineConfig({
	resolve: {
		alias: {
			'@personal-brand/design-tokens': resolve(__dirname, '../packages/design-tokens/dist'),
		},
	},
	root: './',
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				includePaths: [resolve(__dirname, '../packages/design-tokens/dist')],
			},
		},
	},
	build: {
		emptyOutDir: false,
		cssCodeSplit: true,
		lib: {
			formats: ['es'],
			entry: {
				reveal: resolve(__dirname, 'css/reveal.scss'),
				reset: resolve(__dirname, 'css/reset.css'),

				...themeEntries,
			},
		},
	},
	plugins: [],
});
