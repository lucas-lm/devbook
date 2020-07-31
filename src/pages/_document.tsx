import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="description" content="A Bingo Book of Developers" />

          <meta property="og:title" content="devBook" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="A Bingo Book of Developers"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="devBook" />
          <meta property="og:url" content="https://devsbook.now.sh" />

          <meta
            property="og:image"
            content="https://devsbook.now.sh/static/banner.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <meta
            property="og:image:alt"
            content="Octocat illustration next to devbooks logo"
          />

          <meta
            property="og:image"
            content="https://devsbook.now.sh/static/octocat.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:alt" content="Octocat illustration" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-174165324-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174165324-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-174165324-1');
              </script>
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
