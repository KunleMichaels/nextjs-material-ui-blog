import '../styles/globals.css'
import {ThemeProvider} from "../src/theme";

function MyApp({Component, pageProps}) {
    return <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
}

export default MyApp
