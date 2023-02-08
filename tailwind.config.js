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
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: '1rem',

			screens: {
        xs: '414px', // => @media (min-width: 414px) { ... }
        sm: '640px', // => @media (min-width: 640px) { ... }
        md: '768px', // => @media (min-width: 768px) { ... }
        lg: '1024px', // => @media (min-width: 1024px) { ... }
        xl: '1280px' // => @media (min-width: 1280px) { ... }
      }
		},
	},
	plugins: [],
};
