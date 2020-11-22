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
        <div style={{ paddingBottom: 20 }}>
          <TopBar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
