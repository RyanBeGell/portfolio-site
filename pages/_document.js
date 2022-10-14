import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" size="64x64 32x32 16x16" href="/favicon.png" />

          <link 
            href="//db.onlinewebfonts.com/c/33c69019b1d9231e1004f52ae937b0da?family=Neutraface+Text+Bold" 
            rel="stylesheet preload"
            type="text/css"
          />

          {/*Recommended Roboto font for MUI components*/}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/*Recommended MUI Material Icons font*/}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

        </Head>
        <body class="line-numbers">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;