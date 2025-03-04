import { createI18n } from 'vue-i18n'
import en from './locales/en.json'

const messages = {
  en
}

export default createI18n({
  legacy: false,
  locale: 'lt',
  fallbackLocale: 'lt',
  messages,
})
