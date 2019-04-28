import React from "react";
import { FaSearch } from "react-icons/fa";


export default function SearchBox({ searchText, onChange, ar }) {
  let label = "Find a case file";
  let placeholder = "search...";
  if (ar) {
    label = "ابحث عن ملف القضية";
    placeholder = "ابحث...";
  }

  return (
    <form
      className="pa3 black-80 flex-auto mw6 center mb2" style={{"background-color": "#ba365d"}}
      onSubmit={e => e.preventDefault()}
    >
      <div className="measure">
        <label htmlFor="name" className="f3 b db mb2 white ">
          {label}
        </label>
        <div>
          <input
            id="name"
            className="input-reset ba b--black-10 pa2 mb2  db w-90 br-pill bg-white" 
            type="text"
            aria-describedby="name-desc"
            onChange={onChange}
            value={searchText}
          />
         { /* <span className="serach"
            style={{
              position: "absolute",
              top: "185px",
              right: "415px",
              "font-size": "18px",
              color: "#ba365d"
            }}
          >
            <FaSearch />
          </span> */}
        </div>
      </div>
    </form>
  );
}
