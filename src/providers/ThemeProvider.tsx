import { ThemeProvider as Provider } from 'styled-components'
import darkTheme from '../styles/themes/default'
import { ReactNode } from 'react'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <Provider theme={darkTheme}>{children}</Provider>
}

export default ThemeProvider
