
import Head from 'next/head'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Muhal</title>
      </Head>

      <div className="flex-l flex-m flex-column">
        <main className="avenir w-100 overflow-y-auto flex-auto">
          <header className="w-100 pa4 bg-washed-yellow">
            <nav className="db dt-l w-100 border-box">
              <a className="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/en/cases" title="Home">
                <img src="/static/logo_en.svg" height="h3" />
              </a>
              <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a className="link dim black f5 ttu f4-l dib mr3 mr4-l" href="/ar/cases" title="AR">ع</a>
                <a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/en/cases" title="Cases">Cases</a>
                <a className="link dim black f6 ttu f5-l dib mr3 mr4-l" href="/en/about" title="About">About</a>
                <a className="link dim white bg-light-red br2 pa2 f6 f5-l dib b ttu" href="/en/report" title="Report">Report A Case</a>
              </div>
            </nav>
          </header>
          <div className="pa4 bt b--black-10 mw8 center" style={{"background-color": "#ba365d"}}>
            {children}
          </div>
        </main>
        <footer className="h3 bg-washed-yellow flex">
          <div className="pa3 pb0">
            <p>Copyright © 2019 <a href="http://smex.org">SMEX</a></p>
          </div>
        </footer>
      </div>
    </div>
  )
}