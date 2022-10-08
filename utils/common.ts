import i18n from 'i18next'

export function getI18NLanguage() {
  if (typeof window !== 'undefined' && window && window.localStorage.getItem('i18nlang')) {
    return window.localStorage.getItem('i18nlang')
  }

  const language = i18n.language || 'polish'
  return language
}
