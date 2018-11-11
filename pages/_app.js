import Head from 'next/head'
import Link from 'next/link'
import App, {Container} from 'next/app'
import React from 'react'


const Layout = ({ children }) => (
  <div class="sans-serif">
    <Head>
      <title>Freedom of Expression</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    </Head>

    <div class="flex-l flex-m overflow-scroll">
      <segment class="vh-100-m vh-100-l avenir w-100 overflow-y-auto">
        <header class="w-100 pa4 bg-gold">
          <nav class="db dt-l w-100 border-box">
            <a class="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/" title="Home">Freedom of Speech in Lebanon</a>
            <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
              <Link><a class="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/" title="Cases">Cases</a></Link>
              <Link><a class="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/about" title="About">About</a></Link>
              <Link><a class="link dim white bg-light-red br2 pa2 f6 f5-l dib b ttu" href="/report" title="Report">Report Issue</a></Link>
            </div>
          </nav>
        </header>
        <div class="pa4-ns bt b--black-10">
          {children}
        </div>
      </segment>
    </div>
  </div>
)

export default class FOSIL extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }

}