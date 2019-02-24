import React from 'react'

export default function Select ({selectLabel, options, onChange, selected}) {
  return (<form className="pa3 black-80 flex-auto mw5">
    <div className="measure w-100">
      <label htmlFor="name" className="f3 b db mb2">{selectLabel}</label>
      <select selected={selected} className="pa2 w-100" onChange={onChange}>
        <option value={null}>None Selected</option>
        {
          options.map((opt, i) => <option key={`${selectLabel}-${i}`} value={opt}>{opt}</option>)
        }
      </select>
    </div>
  </form>
  )
}