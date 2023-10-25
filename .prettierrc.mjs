/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
export default {
	// changeable
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	// common
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	singleAttributePerLine: false,
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: ['**/*.md', '**/*.json'],
			options: {
				proseWrap: 'preserve',
				useTabs: false,
			},
		},
	],
	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(react-dom/(.*)$)|^(react-dom$)',
		'^(@remix-run/(.*)$)|^(@remix-run$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^types$',
		'^~/types',
		'^~/routes',
		'^~/configs',
		'^~/services',
		'^~/libs',
		'^~/helpers',
		'^~/utils',
		'^~/hooks',
		'^~/components',
		'^~/registry',
		'^~/models',
		'^~/data',
		'^~/schemas',
		'^~/styles',
		'',
		'^[./]',
	],
}
