import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../styletron'
import { DarkTheme, BaseProvider } from 'baseui'
import Header from '../components/Header'
import { Block } from 'baseui/block'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider theme={DarkTheme}>
          <Header />
          <Block
            color="contentPrimary"
            backgroundColor="backgroundPrimary"
            maxWidth="100vw"
            minHeight="100vh"
            overflow="hidden"
          >
            <Component {...pageProps} />
          </Block>
        </BaseProvider>
      </StyletronProvider>
    )
  }
}
