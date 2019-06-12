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
      className="pa3 black-80 flex-auto mw6 center"
      onSubmit={e => e.preventDefault()}
    >
      <div className="measure">
        <label htmlFor="name" className="f3 b db mb2">
          {label}
        </label>
        <input
          id="name"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
          onChange={onChange}
          value={searchText}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}
