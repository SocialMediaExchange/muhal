import React from 'react'

const en_people_fields = [
  "First Name",
  "Last Name",
  "Nationality",
  "Gender"
]

const ar_people_fields = [
  "الاسم الأول",
  "اسم العائلة",
  "الجنسية",
  "الجنس"
]


export default function Person({ person, ar }) {
  let fieldsToChoose = en_people_fields
  let itemClass = "ml0"
  if (ar) {
    fieldsToChoose = ar_people_fields
    itemClass = "mr0"
  }
  let fields = fieldsToChoose.map((field, i) => {
    return (
      <div key={field} className="pb1" >
        <dt className="f6 b">{field}</dt>
        <dd className={itemClass}>{person[field]}</dd>
      </div>
    )
  })
  return <dl className="ml3 lh-title shadow-4 dib pa2 b--black-10 ba mw5 flex-auto">{fields}</dl>
}