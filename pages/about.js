import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import NoSSR from 'react-no-ssr'

function Loading() {
  return (
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
}

export default function About () {
  return (
    <div>
    <h1>About</h1>
    <footer className="pa3-l pa2 w-30">
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
        />
      </NoSSR>
    </footer>
    </div>
  )
}