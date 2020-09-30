import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import { Server, Sheet } from 'styletron-engine-atomic'

interface Props extends DocumentProps {
  stylesheets: Sheet[]
}

class MyDocument extends Document<Props> {
  static getInitialProps(props) {
    const page = props.renderPage((App) => (props) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ))
    const stylesheets = (styletron as Server).getStylesheets() || []
    return { ...page, stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <style>{`
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
            }
            ::selection {
              background: #276EF1;
              color: white;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
