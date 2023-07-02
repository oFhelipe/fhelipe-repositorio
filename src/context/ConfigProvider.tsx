import { createContext, useState, ReactNode, useContext } from 'react'

interface ConfigContextType {
  language: string
  theme: string
  changeLanguage: (language: 'en' | 'pt-BR') => void
  changeTheme: () => void
}

export const ConfigContext = createContext<ConfigContextType>(
  {} as ConfigContextType,
)

type ConfigProviderProps = {
  children: ReactNode
}

export const useConfig = () => {
  return useContext(ConfigContext)
}

function ConfigProvider({ children }: ConfigProviderProps) {
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState(() => {
    if (window.navigator.language.startsWith('pt')) {
      return 'pt-BR'
    }
    return 'en'
  })

  function changeLanguage(language: 'en' | 'pt-BR') {
    setLanguage(language)
  }

  function changeTheme() {
    setTheme((oldSateValue) => {
      if (oldSateValue === 'dark') {
        return 'light'
      }
      return 'dark'
    })
  }

  return (
    <ConfigContext.Provider
      value={{
        theme,
        language,
        changeLanguage,
        changeTheme,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
