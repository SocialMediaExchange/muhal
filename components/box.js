import React from "react";

const colors = ["#ffd991", "#f79d61", "#ba365d", "#3d3356"];

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Box() {
  return (
    <div
      className="ba b--black-30 pa2 mt4  mw5 mb0 mr4 ml4"
      style={{ backgroundColor: randomColor(colors) }}
    />
  );
}
