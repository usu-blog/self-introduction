import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
            body {
              font-family: 'M PLUS Rounded 1c', sans-serif;
            }
            .section {
              background-color: #18222d;
              display: flex;
              justify-content: centor;
              align-items: center;
              flex-direction: column;
              padding: 20px;
            }
            h1,
            h2,
            h3 {
              color: #fff;
              text-align: center;
              margin: 0;
            }
            h1,
            h2 {
              font-size: 6rem;
            }
            h3 {
              font-size: 5rem;
            }
          `}
        </style>
      </Html>
    )
  }
}

export default MyDocument
