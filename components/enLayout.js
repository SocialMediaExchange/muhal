
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="sans-serif">
      <Head>
        <title>Muhal</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
      </Head>

      <div className="flex-l flex-m">
        <main className="vh-100-m vh-100-l avenir w-100 overflow-y-auto">
          <header className="w-100 pa4 bg-washed-yellow">
            <nav className="db dt-l w-100 border-box">
              <a className="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/" title="Home">
                <img src="/static/logo.svg" height="h3" />
              </a>
              <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <Link href="/en/cases"><a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/en/cases" title="Cases">Cases</a></Link>
                <Link href="/en/about"><a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/en/about" title="About">About</a></Link>
                <Link href="/en/report"><a className="link dim white bg-light-red br2 pa2 f6 f5-l dib b ttu" href="/en/report" title="Report">Report Issue</a></Link>
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
}