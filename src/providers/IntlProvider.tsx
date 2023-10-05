import { IntlProvider as Provider } from 'react-intl'
import { getCurrenLocaleLanguage } from '../locales'
import { useConfig } from './ConfigProvider'
import { ReactNode } from 'react'

type IntlProviderProps = {
  children: ReactNode
  locale?: string
}

const IntlProvider = ({ children, locale = '' }: IntlProviderProps) => {
  const { language } = useConfig()
  const selectedLanguage = locale ?? language
  return (
    <Provider
      messages={getCurrenLocaleLanguage(selectedLanguage)}
      locale={selectedLanguage}
    >
      {children}
    </Provider>
  )
}

export default IntlProvider
