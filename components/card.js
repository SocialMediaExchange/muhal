import React from 'react'
import Link from 'next/link'
import { has } from 'ramda'
import { substr } from '../lib/utils'

export default function Card ({data, ar}) {
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

  // Labels
  let platform = "Platform:"
  let complaint = "Complaint by:"
  let ddClass = "dib ml1 gray"

  if (ar) {
    platform = "منصة:"
    complaint = "الجهة المدعية:"
    ddClass = "dib mr1 gray"
  }
  
  return (
    <Link href={`/en/cases/${data.id}`}>
    <a style={{"textDecoration": "none", "color": "black"}} className="mv4 mh3">
        <article className="bg-white shadow-4 pointer grow db min-h-100 mw5-ns hidden ba b--black-10">
          <div className="pa3 bt b--black-10">
            <dl className="f6 lh-title mv2">
              <dt className="dib b">{platform}</dt>
              <dd className={ddClass}>{data["Platform"]}</dd>
            </dl>
            <dl className="f6 lh-title mv2">
              <dt className="dib b">{complaint}</dt>
              <dd className={ddClass}>{data["Complaint_ar"]}</dd>
            </dl>
            <dl className="f6 lh-title mv2">
              {imagesToDisplay}
            </dl>
            <p className="f6 f5-ns lh-copy measure">{substr(data["ماذا حصل؟"], 130)}</p>
            <h1 className="f4 bg-near-white br--top black-80 mv0 pv2 ph3 tracked-tight">{data.Primary}</h1>
          </div>
        </article>
      </a>
    </Link>
  )
}