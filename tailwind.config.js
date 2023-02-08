/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	darkMode: 'class',
	theme: {
		extend: {},
		colors: {
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
			text: 'rgb(var(--color-text) / <alpha-value>)',
			light: 'rgb(var(--color-light) / <alpha-value>)',
			success: 'rgb(var(--color-success) / <alpha-value>)',
			info: 'rgb(var(--color-info) / <alpha-value>)',
			warn: 'rgb(var(--color-warn) / <alpha-value>)',
			error: 'rgb(var(--color-error) / <alpha-value>)',
			transparent: 'transparent',
			current: 'currentColor',
		},
	},
	plugins: [],
};
