import Head from 'next/head'
import Link from 'next/link'
import App, {Container} from 'next/app'
import { Timeline } from 'react-twitter-widgets'
import React from 'react'
import NoSSR from 'react-no-ssr'

const Loading = () => (
  <div>
    <h3>Loading...</h3>
    <style jsx>{`
      div {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `}</style>
  </div>
)

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
              <a class="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/" title="Cases">Cases</a>
              <a class="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/about" title="About">About</a>
              <a class="link dim black f6 ttu f5-l dib" href="/report" title="Report">Report Violation</a>
            </div>
          </nav>
        </header>
        <div class="pa4-ns bt b--black-10">
          {children}
        </div>
      </segment>
      <footer class="pa3-l pa2 center w-30">
        <h6 class="i tc f7 dark-gray avenir lh-copy mv0">2018 SMEX.org · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></h6>
        <NoSSR onSSR={<Loading />} class="center pa3-l pa2 dib-l dn">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'SMEX'
            }}
            options={{
              username: 'smex',
              height: '500'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </NoSSR>
      </footer>
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