import { ThemeProvider } from 'styled-components'
import darkTheme from './styles/themes/default'
import { IntlProvider } from 'react-intl'
import { getCurrenLocaleLanguage } from './locales'
import { useConfig } from './context/ConfigProvider'
import { ReactNode } from 'react'

type ProviderInitProps = {
  children: ReactNode
}

const ProviderInit = ({ children }: ProviderInitProps) => {
  const { language } = useConfig()
  return (
    <ThemeProvider theme={darkTheme}>
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
