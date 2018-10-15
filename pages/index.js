import Head from 'next/head'
import Search from '../components/searchbox'
import Card from '../components/card'

let arr = [1,2,3,4,5,6,7,8,9,10]
export default () => (
  <div>
    <Head>
      <title>Freedom of Expression</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    </Head>

    <body class="sans-serif">
      <div class="flex-l flex-m overflow-scroll">
      <header class="bg-light-yellow vh-100-l vh-100-m w-30-m w-30-l w-100-s overflow-y">
        <div class="center pa3">
          <h3 class="f2 f3-m mv0">
            <span class="black tracked-tight measure-wide">
              Freedom of Speech in Lebanon
             </span>
          </h3>
          <h4 class="f3 f4-m fw1 georgia i measure-narrow">Reports of censorship compiled by SMEX</h4>
        </div>
      </header>
        <div class="pa2 vh-100-m vh-100-l sans-serif w-100 overflow-y">
          <Search />
          <div class="pl4-ns">
            {arr.map(() => <Card />)}
          </div>
        </div>
      </div>
    </body>

  </div>
)