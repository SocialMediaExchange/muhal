import React, {Component} from 'react'
import {has} from 'ramda'

const en_description_fields = [
  "Accused of",
  "Asked to Sign a Pledge",
  "Bail amount",
  "Charged Under (law, article)",
  "Charged With",
  "Complaint by",
  "Date of Detention (if any)",
  "Date of Release",
  "Date of investigation",
  "In Absentia",
  "Judge/Police Station",
  "Medium",
  "Outcome",
  "Year"
]

const en_people_fields = [
  "Name",
  "Nationality",
  "profession/status"
]

export default class extends Component {
  static async getInitialProps (ctx) {
    const isServer = !!ctx.req

    if (isServer) {
      return ctx.query
    }
    else {
      try {
        const res = await fetch(`/_data/cases/${ctx.query.id}`, { headers: { 'Accept': 'application/json' } })
        const json = await res.json()
        return json
      } catch (err) {
        console.error('Error', err)
      }
    }
  }

  render () {
    if (!this.props.case.fields) {
      return <div>Loading...</div>
    }
    const data = this.props.case.fields

    const people = this.props.case.people.map((person) => {
      let fields = en_people_fields.map((field) => {
        return (
          <div className="pb1" key={field}>
            <dt className="f6 b">{field}</dt>
            <dd className="ml0">{person.fields[field]}</dd>
          </div>
        )
      })
      return <dl className="ml3 lh-title shadow-4 dib pa2 b--black-10 ba mw5 flex-auto">{fields}</dl>
    })

    // Images
    const imageLabels = ["Post picture", "Language in Question", "Image of the sentence"]
    let imagesToDisplay = []
    imageLabels.forEach(imageLabel => {
      let attachments = data[imageLabel]
      if (attachments) {
        attachments.filter(has('thumbnails')).forEach(image => {
          imagesToDisplay.push(
            <a class="db mw5 tc black link dim" href={image.url}>
              <img class="db ba b--black-10" alt="" src={image.thumbnails.large.url} />
              <dl class="mt2 f6 lh-copy">
                <dt class="clip">Label</dt>
                <dd class="ml0">{imageLabel}</dd>
              </dl>
            </a>
          )
        }
        )
      }
    })

    return <div>
      <h2>People</h2>
      <div className="flex flex-wrap w-100">
      {people}
      </div>
      <h2>Description</h2>
      <p className="pa2 measure-wide">
        {data["Description of the Case"]}
      </p>
      <h2>Case information</h2>
      <dl className="lh-title pa2 mt0">
        {data && en_description_fields.map((field) => {
          let val = data[field] || "N/A"
          let displayedData = val
          if (displayedData && displayedData.trim().length === 0) {
            displayedData = "N/A"
          }

          return (
            <div className="pb1" key={field}>
              <dt className="f6 b dib mb2">{field + ":"}</dt>
              <dd className="ml1 dib">{displayedData}</dd>
            </div>
          )
        })}
      </dl>
      {
        imagesToDisplay
      }
    </div>
  }
}