import React from 'react'
import { substr } from '../lib'

export default (record) => {
  const data = record.data
  return (
    <article class="db flex-auto-ns ml3 mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{data.Primary}</h1>

      <div class="pa3 bt b--black-10">
      <dl class="f6 lh-title mv2">
        <dt class="dib b">Year:</dt>
        <dd class="dib ml0 gray">{data["Year"]}</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">Medium:</dt>
        <dd class="dib ml0 gray">{data["Medium"]}</dd>
      </dl>
      <dl class="f6 lh-title mv2">
        <dt class="dib b">Complaint By: </dt>
        <dd class="dib ml0 gray">{data["Complaint by"]}</dd>
      </dl>
        <p class="f6 f5-ns lh-copy measure">{substr(data["Description of the Case"], 130)}</p>
      </div>
    </article>
  )
}