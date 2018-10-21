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
      <segment class="pa4 vh-100-m vh-100-l sans-serif w-100 overflow-y-auto">
        <header class="">
          <nav class="lh-copy mv0">
            <ul class="f5 list pa0 tc">
              <h3 class="f2 f3-m mv0">
                <span class="black tracked-tight measure-wide">
                  Freedom of Speech in Lebanon
             </span>
              </h3>
              <li class="dib mr2"><Link><a class="link underline-hover dark-gray b ttu" href="/about">Cases</a></Link></li>
              <li class="dib mr2"><Link><a class="link underline-hover dark-gray b ttu" href="/about">People</a></Link></li>
              <li class="dib mr2"><Link><a class="link underline-hover dark-gray b ttu" href="/report">Report a violation</a></Link></li>
            </ul>
          </nav>

        </header>
        {children}
      </segment>
      <footer class="pa3-l pa2 center w-30">
        <h6 class="i tc f7 dark-gray georgia lh-copy mv0">2018 SMEX.org · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></h6>
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