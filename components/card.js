import React from 'react'
import Link from 'next/link'
import { has } from 'ramda'

function substr(str, len) {
  if (str && str.length > len) {
    return `${str.substring(0, len)}..`
  }
  else return str
}

export default function Card (record) {
  const data = record.data

  // Images
  const imageLabels = ["Post picture", "Language in Question", "Image of the sentence"]
  let imagesToDisplay = []
  imageLabels.forEach(imageLabel => {
    let attachments = data[imageLabel]
    if (attachments) {
      attachments.filter(has('thumbnails')).forEach(image => {
        imagesToDisplay.push(
          <img className="dib" alt="" src={image.thumbnails.small.url} />
        )
      }
      )
    }
  })
  
  return (
    <Link href={`/cases/${data.id}`}>
    <a style={{"textDecoration": "none", "color": "black"}} className="mv4 mh3">
        <article className="bg-white shadow-4 pointer grow db min-h-100 mw5-ns hidden ba b--black-10">
          <div className="pa3 bt b--black-10">
            <dl className="f6 lh-title mv2">
              <dt className="dib b">Platform:</dt>
              <dd className="dib ml1 gray">{data["Platform"]}</dd>
            </dl>
            <dl className="f6 lh-title mv2">
              <dt className="dib b">Complaint by:</dt>
              <dd className="dib ml1 gray">{data["Complaint"]}</dd>
            </dl>
            <dl className="f6 lh-title mv2">
              {imagesToDisplay}
            </dl>
            <p className="f6 f5-ns lh-copy measure">{substr(data["Description of the Case"], 130)}</p>
            <h1 className="f4 bg-near-white br--top black-80 mv0 pv2 ph3 tracked-tight">{data.Primary}</h1>
          </div>
        </article>
      </a>
    </Link>
  )
}