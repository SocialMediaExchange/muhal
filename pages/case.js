import React, {Component} from 'react'
import {has} from 'ramda'

const en_people_fields = [
  "First Name",
  "Last Name",
  "Nationality",
  "Gender"
]

const Accordion = function ({title, children}) {
  function accordionClick(e) {
    e.currentTarget.classList.toggle("active");
    var panel = e.currentTarget.childNodes[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return <section className="accordion" onClick={accordionClick}>
    <style jsx>{`
      .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 10px;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
        margin-bottom: 10px
      }

      .accordion:hover, .active {
        background-color: #ccc;
      }

      .panel {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
    `}</style>
    <h2>{title}</h2>
    <div className="panel">
      <dl className="lh-title pa2 mt0">
        {children}
      </dl>
    </div>
  </section>
}

const Item = function ({field, data}) {
  let displayedData = data[field] || "N/A"
  if (displayedData && displayedData.trim().length === 0) {
    displayedData = "N/A"
  }
  return (
    <div className="pb1" key={field}>
      <dt className="f6 b dib mb2">{field + ":"}</dt>
      <dd className="ml1 dib">{displayedData}</dd>
    </div>
  )
}


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

  render () {
    if (!this.props.case.fields) {
      return <div>Loading...</div>
    }
    const data = this.props.case.fields

    let imagesToDisplay = []
    let attachments = data["Picture of Content in Question"]["Post picture"]
    if (attachments) {
      attachments.filter(has('thumbnails')).forEach(image => {
        imagesToDisplay.push(
          <a class="db mw5 tc black link dim" href={image.url} key={image.url}>
            <img class="db ba b--black-10" alt="" src={image.thumbnails.large.url} />
            <dl class="mt2 f6 lh-copy">
              <dt class="clip">Label</dt>
              <dd class="ml0">Post picture</dd>
            </dl>
          </a>
        )
      }
      )
    }

    return (
      <article>
        <section>
          <h2>People</h2>
          <div className="flex">
            {
              data["People"].map((person) => {
                let fields = en_people_fields.map((field) => {
                  return (
                    <div className="pb1" key={field}>
                      <dt className="f6 b">{field}</dt>
                      <dd className="ml0">{person[field]}</dd>
                    </div>
                  )
                })
                return <dl className="ml3 lh-title shadow-4 dib pa2 b--black-10 ba mw5 flex-auto">{fields}</dl>
              })
          }
          </div>
        </section>
        <section>
          <h2>Case Information</h2>
          <dl className="lh-title pa2 mt0">
            <Item field="Year" data={data} />
            <Item field="Description of the Case" data={data} />
          </dl>
        </section>
        <Accordion title="Expression of Opinion">
          <Item field="Accused of" data={data["Expression of Opinion"]} />
          <Item field="Charged Under (law, article)" data={data["Expression of Opinion"]} />
          <Item field="Platform" data={data} />
          <div className="pb1" key="Complaint by">
            <dt className="f6 b dib mb2">Complaint by:</dt>
            <dd className="ml1 dib">{data["Complaint"][0]}</dd>
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
      </article>
    )
  }
}