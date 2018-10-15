import Head from 'next/head'
import Link from 'next/link'
import { Timeline } from 'react-twitter-widgets'

export default ({children}) => (
  <div>
    <Head>
      <title>Freedom of Expression</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    </Head>

    <body class="sans-serif">
      <div class="flex-l flex-m overflow-scroll">
      <header class="bg-light-yellow vh-100-l vh-100-m w-30-m w-30-l w-100-s overflow-y-auto flex-column">
        <div class="center pa3-l pa2">
          <h3 class="f2 f3-m mv0">
            <span class="black tracked-tight measure-wide">
              Freedom of Speech in Lebanon
             </span>
          </h3>
          <h4 class="f3-l f4-m f6-s fw1 georgia i measure-narrow">Reports of censorship compiled by SMEX</h4>
          </div>
          <div class="center pa3-l pa2 dib-l dn">
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
        </div>
          <footer class="pa3-l pa2 center">
            <nav class="lh-copy mv0">
              <ul class="f5 list pa0 tc">
                <li class="dib mr2"><Link><a class="link underline-hover dark-gray b ttu" href="/">Search</a></Link></li>
                <li class="dib mr2"><Link><a class="link underline-hover dark-gray b ttu" href="/about">About</a></Link></li>
                <li class="dib mr2"><Link><a class="link underline-hover dark-gray b ttu" href="/report">Report a Case</a></Link></li>
              </ul>
            </nav>
            <h6 class="i tc f7 dark-gray georgia lh-copy mv0">2018 SMEX.org · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></h6>
          </footer>

        </header>
        <div class="pa4 vh-100-m vh-100-l sans-serif w-100 overflow-y-auto">
          {children}
        </div>
      </div>
    </body>

  </div>
)