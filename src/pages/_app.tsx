import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles, * as mode from '~/themes'

function App({ Component, pageProps }: AppProps) {
  const theme = mode['dark']
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
