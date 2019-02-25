import React from 'react'

export function Accordion ({title, children, ar}) {
  function accordionClick(e) {
    e.currentTarget.classList.toggle("active");
    var panel = e.currentTarget.childNodes[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return <section className="accordion" onClick={accordionClick} style={
    {
      "textAlign": ar ? "right": "left"
    }
  }>
    <style jsx>{`
      .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 10px;
        width: 100%;
        border: none;
        outline: none;
        transition: 0.4s;
        margin-bottom: 10px
      }

      .accordion:hover, .active {
        background-color: #ccc;
      }

      .panel {
        padding: 0 18px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
    `}</style>
    <h2>{title}</h2>
    <div className="panel">
      <dl className="lh-title pa2 mt0">
        {children}
      </dl>
    </div>
  </section>
}

export function Item ({field, data, name, ar}) {
  let displayedData = data[field] || "N/A"
  let displayName = name ? name : field
  let itemClass = "ml1 dib"

  if (ar) {
    itemClass = "mr1 dib"
  }
  if (displayedData && displayedData.trim().length === 0) {
    displayedData = "N/A"
  }
  return (
    <div className="pb1" key={field}>
      <dt className="f6 b dib mb2">{displayName + ":"}</dt>
      <dd className={itemClass}>{displayedData}</dd>
    </div>
  )
}
