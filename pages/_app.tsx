import { ThemeProvider } from '../src/theme'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import TopBar from '../src/components/TopBar'
import { Footer } from '../src/components/Footer'
import styles from '../styles/App.module.css'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <div className={styles['app-container']}>
        <ThemeProvider>
          <div className={styles['content-container']}>
            <TopBar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  )
}

export default MyApp
