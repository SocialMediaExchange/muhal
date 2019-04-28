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
    <form
      className="pa3 flex-auto mw5 mb2 "
      style={{ "background-color": "#ba365d" }}
    >
      <div className="measure w-100">
        <label htmlFor="name" className="f3 db ma1 white ">
          {selectLabel}
        </label>
        <select
          selected={selected}
          className="pa1 w-100  white "
          style={{
            "background-color": "#ba365d",
            "border-radius": "80px",
            "border-color": "white"
          }}
          onChange={onChange}
        >
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
