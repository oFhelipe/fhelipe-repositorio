import ThemeProvider from './ThemeProvider'
import IntlProvider from './IntlProvider'
import { ReactNode } from 'react'

type ProviderInitProps = {
  children: ReactNode
}

const ProviderInit = ({ children }: ProviderInitProps) => {
  return (
    <ThemeProvider>
      <IntlProvider>{children}</IntlProvider>
    </ThemeProvider>
  )
}

export default ProviderInit
