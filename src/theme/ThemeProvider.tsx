import React, { useCallback, useEffect, useState } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { lightTheme, darkTheme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ToggleThemeContext = React.createContext({
  toggleTheme: () => {
    console.log()
  },
  isDark: false,
})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('')
  const [appliedTheme, setAppliedTheme] = useState(darkTheme)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme && theme === 'lightTheme') {
      setSelectedTheme('lightTheme')
      setAppliedTheme(lightTheme)
    } else if (theme && theme === 'darkTheme') {
      setSelectedTheme('darkTheme')
      setAppliedTheme(darkTheme)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (!selectedTheme || selectedTheme === 'darkTheme') {
      setSelectedTheme('lightTheme')
      setAppliedTheme(lightTheme)
      localStorage.setItem('theme', 'lightTheme')
    } else {
      setSelectedTheme('darkTheme')
      localStorage.setItem('theme', 'darkTheme')
      setAppliedTheme(darkTheme)
    }
  }, [selectedTheme, setSelectedTheme])

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, isDark: !(selectedTheme === 'lightTheme') }}>
      <MuiThemeProvider theme={appliedTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ThemeProvider
