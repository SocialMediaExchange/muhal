import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>محال</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lateef&amp;subset=arabic"
          rel="stylesheet"
        />
      </Head>

      <div
        className="flex-l flex-m flex-column"
        style={{ direction: "rtl", fontFamily: "Lateef, sans-serif" }}
      >
        <main className="w-100 overflow-y-auto flex-auto">
          <header className="w-100 pa0">
            <nav className="db dt-l w-100 border-box ">
              <a
                className="db dtc-l v-mid b black f3 link w-100 pa2 w-33-l tc tl-l mb2 mb0-l tracked-tight"
                style={{ "background-color": "#f79d61" }}
                href="/ar/cases"
                title="Home"
              >
                <img src="/static/arlogo.png" height="h3" />
              </a>
              <div
                className="db dtc-l v-mid w-100 w-75-l tc tl-l "
                style={{
                  backgroundImage: "url(" + "../static/wer.png" + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <a
                  className="link dim black f5 ttu f4-l dib ml3 ml4-l pl3 pr3 pt1 pb1 br4 white"
                  style={{ "background-color": "#f79d61" }}
                  href="/en/cases"
                  title="EN"
                >
                  EN
                </a>
                <a
                  className="link dim black f5 ttu f4-l dib ml3 ml4-l pl3 pr3 pt1 pb1 br4 white"
                  style={{ "background-color": "#3d3356" }}
                  href="/ar/cases"
                  title="Cases"
                >
                  قضايا
                </a>
                <a
                  className="link dim black f5 ttu f4-l dib ml3 ml4-l pl3 pr3 pt1 pb1 br4 white"
                  style={{ "background-color": "#3d3356" }}
                  href="/ar/about"
                  title="About"
                >
                  نبذة عن الموقع
                </a>
                <a
                  className="link dim white f5 ttu f4-l dib ml3 ml5-l pl3 pr3 pt1 pb1 br4 white"
                  style={{ "background-color": "#ba365d" }}
                  href="/ar/report"
                  title="Report"
                >
                  {" "}
                  بلّغ/ي عن حالة 
                </a>
              </div>
            </nav>
          </header>
          <div className="pb4 pl0 pr0 pt2">{children}</div>
        </main>
        <footer className="h3 bg-washed-yellow flex">
          <div className="pa3 pb0">
            <p>
              حقوق الطبع والنشر © 2019 <a href="http://smex.org">SMEX</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
