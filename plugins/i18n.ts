import { createI18n } from 'vue-i18n'
import en from '../locale/en.json'
import id from '../locale/id.json'
export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'id',
    messages: {
      en, id
    }
  })

  vueApp.use(i18n)
})
