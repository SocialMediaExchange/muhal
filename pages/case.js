import React, {Component} from 'react'

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
      const res = await fetch(`/_data/cases/${ctx.query.id}`, {headers: {'Accept': 'application/json'}})
      const json = await res.json()
      return json
    }
  }

  render () {
    const data = this.props.case.fields
    const people = this.props.case.people.map((person) => {
      let fields = en_people_fields.map((field) => {
        return (
          <div class="pb1">
            <dt class="f6 b">{field}</dt>
            <dd class="ml0">{person.fields[field]}</dd>
          </div>
        )
      })
      return <dl class="ml3 lh-title shadow-4 dib pa2 b--black-10 ba mw5 flex-auto">{fields}</dl>
    })
    return <div>
      <h2>People</h2>
      <div class="flex flex-wrap w-100">
      {people}
      </div>
      <h2>Description</h2>
      <p class="pa2 measure-wide">
        {data["Description of the Case"]}
      </p>
      <h2>Case information</h2>
      <dl class="lh-title pa2 mt0">
        {en_description_fields.map((field) => {
          let data = data[field]
          let displayedData = data
          if (data.trim().length === 0) {
            displayedData = "N/A"
          }

          return (
            <div class="pb1">
              <dt class="f6 b dib mb2">{field + ":"}</dt>
              <dd class="ml1 dib">{displayedData}</dd>
            </div>
          )
        })}
      </dl>
    </div>
  }
}