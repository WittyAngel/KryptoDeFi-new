import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

import { getI18NLanguage } from 'utils'
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: getI18NLanguage().replace(new RegExp(`\\"`, 'g'), '') as any,
    fallbackLng: ['english', 'polish', 'spanish'],
    debug: false,
    interpolation: {
      escapeValue: true
    },
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: `/locales/{{lng}}.json`
    },
    load: 'all'
  })

export default i18n
