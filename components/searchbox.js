import React from "react";



export default function SearchBox({ searchText, onChange, ar }) {
  let label = "Find a case file";
  let placeholder = "search...";
  if (ar) {
    label = "ابحث عن ملف القضية";
    placeholder = "ابحث...";
  }

  return (
    <form
      className="pa3 black-80 fl w-third mw6 mb2" style={{"background-color": "#ba365d"}}
      onSubmit={e => e.preventDefault()}
    >
      <div className="measure">
        <label htmlFor="name" className="f3 b db ml2 mb2 white ">
          {label}
        </label>
        <div>
          <input
            id="name"
            className="input-reset ba b--black-10 pa2 ml2 mb2  db w-90 br-pill bg-white" 
            type="text"
            aria-describedby="name-desc"
            onChange={onChange}
            value={searchText}
          />
         
        </div>
      </div>
    </form>
  );
}
