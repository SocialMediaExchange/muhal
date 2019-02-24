import React from 'react'

export default function SearchBox ({searchText, onChange}) {
  return (
    <form className="pa3 black-80 flex-auto mw6">
      <div className="measure">
        <label htmlFor="name" className="f3 b db mb2">Find a case file</label>
        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
          onChange={onChange} value={searchText} placeholder="search..." />
     </div>
    </form>
  );
}