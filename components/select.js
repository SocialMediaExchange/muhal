import React from "react";

export default function Select({
  ar,
  selectLabel,
  options,
  onChange,
  selected
}) {
  let none = "None Selected";
  if (ar) {
    none = "لا شيء محدد";
  }
  return (
    <form className="pa3 black-80 flex-auto mw5 center">
      <div className="measure w-100">
        <label htmlFor="name" className="f3 b db mb2">
          {selectLabel}
        </label>
        <select selected={selected} className="pa2 w-100" onChange={onChange}>
          <option value={null}>{none}</option>
          {options.map((opt, i) => (
            <option key={`${selectLabel}-${i}`} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
