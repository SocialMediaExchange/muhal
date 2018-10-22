import React from 'react'

export default ({selectLabel, options, onChange, selected}) => {
  return (<form class="pa3 black-80 flex-auto mw5">
    <div class="measure w-100">
      <label for="name" class="f3 b db mb2">{selectLabel}</label>
      <select selected={selected} class="pa2 w-100" onChange={onChange}>
        <option value={null}>None Selected</option>
        {
          options.map(opt => <option value={opt}>{opt}</option>)
        }
      </select>
    </div>
  </form>
  )
}