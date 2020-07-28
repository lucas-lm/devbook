import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles, * as mode from '~/themes'
import NavBar from '@components/NavBar'

function App({ Component, pageProps }: AppProps) {
  const theme = mode['dark']
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <footer>Rodapé</footer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
