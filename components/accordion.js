import React from 'react'

export function Accordion ({title, children}) {
  function accordionClick(e) {
    e.currentTarget.classList.toggle("active");
    var panel = e.currentTarget.childNodes[1];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return <section className="accordion" onClick={accordionClick}>
    <style jsx>{`
      .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 10px;
        width: 100%;
        text-align: left;
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

export function Item ({field, data}) {
  let displayedData = data[field] || "N/A"
  if (displayedData && displayedData.trim().length === 0) {
    displayedData = "N/A"
  }
  return (
    <div className="pb1" key={field}>
      <dt className="f6 b dib mb2">{field + ":"}</dt>
      <dd className="ml1 dib">{displayedData}</dd>
    </div>
  )
}
