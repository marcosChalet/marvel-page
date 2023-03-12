// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
		"jest": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"react/react-in-jsx-scope": "off",
	},
};
