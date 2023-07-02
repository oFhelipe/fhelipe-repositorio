import ptBR from './pt-br'
import en from './en'

function getCurrenLocaleLanguage(language: string): Record<string, string> {
  if (language === 'en') {
    return en
  }
  return ptBR
}

export { getCurrenLocaleLanguage }
