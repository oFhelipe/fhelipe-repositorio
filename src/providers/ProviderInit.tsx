import ThemeProvider from './ThemeProvider'
import { IntlProvider } from 'react-intl'
import { getCurrenLocaleLanguage } from '../locales'
import { useConfig } from './ConfigProvider'
import { ReactNode } from 'react'

type ProviderInitProps = {
  children: ReactNode
}

const ProviderInit = ({ children }: ProviderInitProps) => {
  const { language } = useConfig()
  return (
    <ThemeProvider>
      <IntlProvider
        messages={getCurrenLocaleLanguage(language)}
        locale={language}
      >
        {children}
      </IntlProvider>
    </ThemeProvider>
  )
}

export default ProviderInit
