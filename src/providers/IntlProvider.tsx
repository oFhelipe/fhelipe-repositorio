import { IntlProvider as Provider } from 'react-intl'
import { getCurrenLocaleLanguage } from '../locales'
import { useConfig } from './ConfigProvider'
import { ReactNode, useEffect } from 'react'

type IntlProviderProps = {
  children: ReactNode
  locale?: 'en' | 'pt-BR'
}

const IntlProvider = ({ children, locale }: IntlProviderProps) => {
  const { language, changeLanguage } = useConfig()

  useEffect(() => {
    if (locale) {
      changeLanguage(locale)
    }
  }, [locale, changeLanguage])

  return (
    <Provider messages={getCurrenLocaleLanguage(language)} locale={language}>
      {children}
    </Provider>
  )
}

export default IntlProvider
