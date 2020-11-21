import React from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { lightTheme, darkTheme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const appliedTheme = prefersDarkMode ? darkTheme : lightTheme

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
