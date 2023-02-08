// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			title: 'Riyan Purba',
			meta: [
				{ name: 'theme-color', content: '#c92127' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{ name: 'robots', content: 'index, follow,max-image-preview:large' },
				{
					name: 'description',
					content: 'Riyan Purba',
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
				class: 'dark',
			},
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	ssr: false
})
