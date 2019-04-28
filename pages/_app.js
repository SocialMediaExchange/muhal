import Head from 'next/head'
import App, {Container} from 'next/app'
import React from 'react'


const Layout = ({ children }) => (
  <div className="sans-serif">
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
      <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />
      <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
    </Head>
   {children}
  </div>
)

export default class Muhal extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}