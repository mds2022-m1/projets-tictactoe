module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/no-mutable-exports': 0,
		'no-labels': 0,
		'no-restricted-syntax': 0,
	},
	plugins: ['@typescript-eslint', 'svelte3'],
	extends: [
		'typescript-airbnb-prettier-svelte',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
};
