// https://nuxt.com/docs/api/configuration/nuxt-config
// import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			title: 'Portfolio Riyan Purba - Solusi Terbaik untuk Pengembangan Website Anda',
			meta: [
				{ name: 'theme-color', content: '#c92127' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{ name: 'robots', content: 'index, follow,max-image-preview:large' },
				{
					name: 'description',
					content: 'Portfolio Riyan Purba menampilkan karya-karya terbaik dalam web development. Temukan solusi kreatif untuk bisnis Anda.',
				},
				{
					name: 'keywords',
					content: 'Riyan Purba',
				},
			],
			htmlAttrs: {
				lang: 'id-ID',
			},
			bodyAttrs: {
				class: 'dark:bg-[#111215]',
			},
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	ssr: false,
	modules: ['@nuxtjs/color-mode'],
	colorMode: {
		classSuffix: '',
		preference: 'system',
		fallback: 'dark',
	},
	css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	vite: {
    plugins: [
      // eslintPlugin(),
    ]
  },
});
