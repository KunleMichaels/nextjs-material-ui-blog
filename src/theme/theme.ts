import { createMuiTheme } from '@material-ui/core'

export const paletteColors = {
  primary: '#1F393B',
  secondary: '#F1C291',
  error: '#E44C65',
  background: '#FFFEFC',
  text: '#303F50',
}

export const additionalColors = {
  greyText: '#333533',
}

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: paletteColors.primary,
    },
    secondary: {
      main: paletteColors.secondary,
    },
    error: {
      main: paletteColors.error,
    },
    background: {
      default: paletteColors.background,
    },
    text: {
      primary: paletteColors.text,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: { fontFamily: 'Roboto', fontWeight: 300, fontSize: '96px', lineHeight: '127px', letterSpacing: '-1.5px' },
    h2: { fontFamily: 'Roboto', fontWeight: 300, fontSize: '60px', lineHeight: '79px', letterSpacing: '-0.5px' },
    h3: { fontFamily: 'Roboto', fontSize: '48px', lineHeight: '63px' },
    h4: { fontFamily: 'Roboto', fontSize: '34px', lineHeight: '45px', letterSpacing: '0.25px' },
    h5: { fontFamily: 'Roboto', fontSize: '24px', lineHeight: '32px' },
    h6: { fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '26px', letterSpacing: '0.15px' },
    subtitle1: { fontFamily: 'Roboto', fontSize: '16px', lineHeight: '19px', letterSpacing: '0.15px' },
    subtitle2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16.41px',
      letterSpacing: '0.1px',
    },
    body1: { fontFamily: 'Roboto', fontSize: '18px', lineHeight: '200%', letterSpacing: '0.5px' },
    body2: { fontFamily: 'Roboto', fontSize: '14px', lineHeight: '16px', letterSpacing: '0.25px' },
    button: { fontFamily: 'Roboto', fontWeight: 500, fontSize: '14px', letterSpacing: '1.25px' },
    caption: { fontFamily: 'Roboto', fontSize: '12px', lineHeight: '14px', letterSpacing: '0.4px' },
    overline: { fontFamily: 'Roboto', fontSize: '10px', lineHeight: '12px', letterSpacing: '1.5px' },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          padding: 0,
          margin: 0,
        },
        body: {
          height: '100%',
          padding: 0,
          margin: 0,
        },
      },
    },
  },
})

export const darkTheme = lightTheme

export default lightTheme
