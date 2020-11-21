import '../styles/globals.css'
import { ThemeProvider } from '../src/theme'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import TopBar from '../src/components/TopBar'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <ThemeProvider>
        <TopBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
