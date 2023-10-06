import { ReactNode } from 'react'
import ConfigProvider from '../providers/ConfigProvider'
import ThemeProvider from '../providers/ThemeProvider'
import IntlProvider from '../providers/IntlProvider'

type TestProviderProps = {
  children: ReactNode
  initialLanguage?: 'pt-BR' | 'en'
}

function TestProvider({
  children,
  initialLanguage = 'pt-BR',
}: TestProviderProps) {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <IntlProvider locale={initialLanguage}>{children}</IntlProvider>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default TestProvider
