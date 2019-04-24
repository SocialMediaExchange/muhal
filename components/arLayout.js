
import Head from 'next/head'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>محال</title> 
        <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet" /> 
      </Head>

      <div className="flex-l flex-m flex-column" style={{"direction": "rtl", "fontFamily": "Tajawal, sans-serif"}}>
        <main className="w-100 overflow-y-auto flex-auto">
          <header className="w-100 pa4 bg-washed-yellow">
            <nav className="db dt-l w-100 border-box">
              <a className="db dtc-l v-mid b black f3 link w-100 w-33-l tc tl-l mb2 mb0-l tracked-tight" href="/ar/cases" title="Home">
                <img src="/static/logo.svg" height="h3" />
              </a>
              <div className="db dtc-l v-mid w-100 w-75-l tc tl-l">
                <a className="link dim black f5 ttu f4-l dib ml3 ml4-l" href="/en/cases" title="EN">EN</a>
                <a className="link dim black f5 ttu f4-l dib ml3 ml4-l" href="/ar/cases" title="Cases">قضايا</a>
                <a className="link dim black f5 ttu f4-l dib ml3 ml4-l" href="/ar/about" title="About">نبذة عن الموقع</a>
                <a className="link dim white bg-light-red br2 pa2 f5 f4-l dib b ttu ml4-l" href="/ar/report" title="Report"> بلّغ/ي عن حالة </a>
              </div>
            </nav>
          </header>
          <div className="pa4 bt b--black-10 mw8 center">
            {children}
          </div>
        </main>
        <footer className="h3 bg-washed-yellow flex">
          <div className="pa3 pb0">
            <p>حقوق الطبع والنشر © 2019 <a href="http://smex.org">SMEX</a></p>
          </div>
        </footer>
      </div>
    </div>
  )
}
