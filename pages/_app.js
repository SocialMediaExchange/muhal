import Head from 'next/head'
import Link from 'next/link'
import App, {Container} from 'next/app'
import React from 'react'


const Layout = ({ children }) => (
  <div className="sans-serif">
    <Head>
      <title>Muhal</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
      <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />
      <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />

    </Head>

    <div className="flex-l flex-m rtl">
      <main className="vh-100-m vh-100-l avenir w-100 overflow-y-auto">
        <header className="w-100 pa4 bg-washed-yellow">
          <nav className="db dt-l w-100 border-box">
            <a className="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/" title="Home">
            <img src="/static/logo.svg" height="h3"/>
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
              <Link href="/"><a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/" title="Cases">Cases</a></Link>
              <Link href="/about"><a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/about" title="About">About</a></Link>
              <Link href="/report"><a className="link dim white bg-light-red br2 pa2 f6 f5-l dib b ttu" href="/report" title="Report">Report Issue</a></Link>
            </div>
          </nav>
        </header>
        <div className="pa4 bt b--black-10">
          {children}
        </div>
      </main>
    </div>
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