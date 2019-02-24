import React from 'react'

const en_people_fields = [
  "First Name",
  "Last Name",
  "Nationality",
  "Gender"
]


export default function Person({ person }) {
  let fields = en_people_fields.map((field, i) => {
    return (
      <div key={field} className="pb1" >
        <dt className="f6 b">{field}</dt>
        <dd className="ml0">{person[field]}</dd>
      </div>
    )
  })
  return <dl className="ml3 lh-title shadow-4 dib pa2 b--black-10 ba mw5 flex-auto">{fields}</dl>
}