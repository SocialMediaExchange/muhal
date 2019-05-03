import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Muhal</title>
      </Head>

      <div className="flex-l flex-m flex-column">
        <main className="avenir w-100 overflow-y-auto flex-auto">
          <header className="w-100 pa0">
            <nav className="db dt-l w-100 border-box">
              <a
                className="db dtc-l v-mid b black f3 link w-100  w-33-l tc tl-l mb2 mb0-l tracked-tight"
                style={{ "background-color": "#f79d61" }}
                href="/en/cases"
                title="Home"
              >
                <img src="/static/logo_en.svg" height="h3" />
              </a>
              <div className="db dtc-l v-mid w-100 w-75-l tc tr-l" 
              style={{
                backgroundImage: "url(" + "../static/nav-logo-en.png" + ")",
                backgroundPosition: "right",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
              >
                <a
                  className="link dim black f5 ttu f4-l dib mr3 mr3-l pr3 pl3 pt1 pb1 br4 white"
                  style={{ "background-color": "#f79d61" }}
                  href="/ar/cases"
                  title="AR"
                >
                  ع
                </a>
                <a
                  className="link dim black f6 ttu f5-l dib mr3 mr3-l pr3 pl3 pt1 pb1 br4 white"
                  style={{ "background-color": "#3d3356" }}
                  href="/en/cases"
                  title="Cases"
                >
                  Cases
                </a>
                <a
                  className="link dim black f6 ttu f5-l dib mr3 mr3-l pr3 pl3 pt1 pb1 br4 white"
                  style={{ "background-color": "#3d3356" }}
                  href="/en/about"
                  title="About"
                >
                  About
                </a>
                <a
                  className="link dim white f5 ttu f4-l dib pl2 pr2 pt1 pb1 mr5 br4 white "
                  style={{ "background-color": "#ba365d" }}
                  href="/en/report"
                  title="Report"
                >
                  Report A Case
                </a>
              </div>
            </nav>
          </header>
          <div
            className="pb4 p10 pl0 pt2"
            
          >
            {children}
          </div>
        </main>
        <footer className="h3 bg-washed-yellow flex">
          <div className="pa3 pb0">
            <p>
              Copyright © 2019 <a href="http://smex.org">SMEX</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
