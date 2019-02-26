import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import Layout from '../../components/enLayout'
import Link from 'next/link'
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
    <Layout>
      <h1>About</h1>
      <h2>What’s Wrong?</h2>
      <p className="measure-copy mw7">
        Online freedom of expression in Lebanon is under threat. Since 2016, the number of freedom of expression-related detentions has increased dramatically. Articles in the penal code, military justice code, and other laws are often held up to justify the pre-trial detention of citizens, which can span multiple days. Many of these cases remain open for an indefinite period of time, allowing defendants to be tried at a whim. While many outside Lebanon perceive it as a hub for free expression, the reality is far different.
    </p>
      <h2>What is Muhal?</h2>
      <p className="measure-copy mw7">
        Muhal is SMEX’s ongoing, evidence-based campaign to document detentions and arrests related to online freedom of speech in Lebanon. Muhal aims to raise awareness about these issues among civil society organizations, journalists, young people, and other stakeholders and pressure policymakers to change the laws, particularly regarding defamation and libel, that have led to the majority of these arrests.
    </p>
      <p className="measure-copy mw7">
        Muhal will also shed light on the pre-trial detention process and bring in an end to this tactic, particularly for freedom of expression related cases.
    </p>
      <h2>Navigation Tips</h2>
      <p className="measure-copy mw7">
        Filter cases by year, platform, or complaint by. To find more specific information, use the general search bar.
    </p>
      <h2>Get Involved</h2>
      <p className="measure-copy mw7">
        If you or someone you know has been detained by the authorities regarding posts on social media, <Link href="/en/report"><a href="/report">report a case</a></Link> by filling in the form and we will upload it to the database.
        </p>


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
    </Layout>
  )
}