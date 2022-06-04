import Document, { Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es-AR">
        <head>
          {this.props.head}
        </head>
        <body>
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
