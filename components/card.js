import React from 'react'
import Link from 'next/link'
import { substr } from '../lib'

export default (record) => {
  const data = record.data
  return (
    <Link href={`/cases/${data.id}`}>
    <a style={{"textDecoration": "none", "color": "black"}} className="mv4 mh3">
    <article className="bg-white shadow-4 pointer grow db min-h-100 mw5-ns hidden ba b--black-10">
      <div className="pa3 bt b--black-10">
        <dl className="f6 lh-title mv2">
          <dt className="dib b">Medium:</dt>
          <dd className="dib ml1 gray">{data["Medium"]}</dd>
        </dl>
        <dl className="f6 lh-title mv2">
          <dt className="dib b">Complaint By: </dt>
          <dd className="dib ml1 gray">{data["Complaint by"]}</dd>
        </dl>
        <p className="f6 f5-ns lh-copy measure">{substr(data["Description of the Case"], 130)}</p>
      <h1 className="f4 bg-near-white br--top black-80 mv0 pv2 ph3 tracked-tight">{data.Primary}</h1>
      </div>
    </article>
    </a>
    </Link>
  )
}