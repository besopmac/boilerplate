import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#333333" />
        <meta name="description" content="A simple project" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
