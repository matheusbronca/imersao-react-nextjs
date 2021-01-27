import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <title>Quiz The Witcher</title>
          <meta name="title" content="Quiz The Witcher" />
          <meta
            name="description"
            content="Teste seus conhecimentos sobre a franquia The Witcher
e se divirta."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://imersao-react-nextjs.matheusbronca.vercel.app/"
          />
          <meta property="og:title" content="Quiz The Witcher" />
          <meta
            property="og:description"
            content="Teste seus conhecimentos sobre a franquia The Witcher
e se divirta."
          />
          <meta property="og:image" content="https://imersao-react-nextjs.matheusbronca.vercel.app/images/og-image.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://imersao-react-nextjs.matheusbronca.vercel.app/"
          />
          <meta property="twitter:title" content="Quiz The Witcher" />
          <meta
            property="twitter:description"
            content="Teste seus conhecimentos sobre a franquia The Witcher
e se divirta."
          />
          <meta property="twitter:image" content="https://imersao-react-nextjs.matheusbronca.vercel.app/images/og-image.jpg"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
