import React, {Component} from 'react'
import {Accordion, Item} from '../../components/accordion'
import Layout from '../../components/enLayout'
import Person from '../../components/person'
import {has} from 'ramda'

export default class Case extends Component {
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

  render() {
    if (!this.props.case || !this.props.case.fields) {
      return <Layout><div>Loading...</div></Layout>
    }
    const data = this.props.case.fields

    let imagesToDisplay = []
    let attachments = data["Picture of Content in Question"]["Post picture"]
    if (attachments) {
      attachments.filter(has('thumbnails')).forEach(image => {
        imagesToDisplay.push(
          <a className="db mw5 tc black link dim" href={image.url} key={image.url}>
            <img className="db ba b--black-10" alt="" src={image.thumbnails.large.url} />
            <dl className="mt2 f6 lh-copy">
              <dt className="clip">Label</dt>
              <dd className="ml0">Post picture</dd>
            </dl>
          </a>
        )
      }
      )
    }

    return (
      <Layout>
        <section>
          <h2>Defendants</h2>
          <div className="flex">
            {
              data["People"].map((person) => <Person key={person} person={person} />)
            }
          </div>
        </section>
        <section>
          <h2>Case Information</h2>
          <dl className="lh-title pa2 mt0 mw7">
            <Item field="Year" data={data} />
            <Item field="Description of the Case" data={data} />
            <Item field="Status" data={data} />
          </dl>
        </section>
        <Accordion title="Expression of Opinion">
          <Item field="Accused of" data={data["Expression of Opinion"]} />
          <Item field="Charged Under (law, article)" data={data["Expression of Opinion"]} />
          <Item field="Platform" data={data} />
          <div className="pb1" key="Complaint by">
            <dt className="f6 b dib mb2">Complaint by:</dt>
            <dd className="ml1 dib">{data["Complaint"]}</dd>
          </div>
        </Accordion>
        <Accordion title="Investigation and Detention">
          <Item field="Sentenced" data={data["Investigation and Detention"]} />
          <Item field="Sentence" data={data["Investigation and Detention"]} />
          <Item field="In Absentia" data={data["Investigation and Detention"]} />
          <Item field="Detained" data={data["Investigation and Detention"]} />
          <Item field="Numbers of days detained" data={data["Investigation and Detention"]} />
          <Item field="Requested to sign a pledge" data={data["Investigation and Detention"]} />
          <Item field="Asked to delete content" data={data["Investigation and Detention"]} />
          <Item field="Contacted by the police Station" data={data["Investigation and Detention"]} />
        </Accordion>
        <Accordion title="Timeline">
          <Item field="Date of the post" data={data["Timeline"]} />
          <Item field="Date of contact from Cybercrime Bureau" data={data["Timeline"]} />
          <Item field="Date of investigation" data={data["Timeline"]} />
          <Item field="Date of the detainment" data={data["Timeline"]} />
          <Item field="Time of the detainment" data={data["Timeline"]} />
          <Item field="Date of hearing" data={data["Timeline"]} />
          <Item field="Date of 2nd hearing" data={data["Timeline"]} />
          <Item field="Date of release" data={data["Timeline"]} />
          <Item field="Date of ruling" data={data["Timeline"]} />
        </Accordion>
        <Accordion title="Court/police station information">
          <Item field="Court/police station name" data={data["Court/police station information"]} />
          <Item field="Judge Title" data={data["Court/police station information"]} />
          <Item field="Judge Name" data={data["Court/police station information"]} />
          <Item field="Location" data={data["Court/police station information"]} />
        </Accordion>
        <section>
          <h2>Content in Question</h2>
          {
            imagesToDisplay.length > 0 ? imagesToDisplay : "N/A"
          }
        </section>
        {
          data["Source"]
            ? (
              <section>
                <h2>Source</h2>
                <a href={data["Source"]} >{data["Source"]}</a>
              </section>
            )
            : <div />
        }
      </Layout>
    )
  }
}