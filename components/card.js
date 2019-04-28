import React from "react";
import Link from "next/link";
import { has } from "ramda";
import { substr } from "../lib/utils";

import Box from "./box";

export default function Card({ data, ar }) {
  // Images
  const imageLabels = [
    "Post picture",
    "Language in Question",
    "Image of the sentence"
  ];
  let imagesToDisplay = [];
  imageLabels.forEach(imageLabel => {
    let attachments = data[imageLabel];
    if (attachments) {
      attachments.filter(has("thumbnails")).forEach(image => {
        imagesToDisplay.push(
          <img className="dib" alt="" src={image.thumbnails.small.url} />
        );
      });
    }
  });

  // Labels
  let platform = "Platform:";
  let complaint = "Complaint by:";
  let ddClass = "dib ml1 gray";
  let link = `/en/cases/${data.id}`;

  // data
  let platformData = data["Platform"];
  let complaintData = data["Complaint"];
  let description = data["Description of the Case"];
  let name = data["Primary"];

  if (ar) {
    platform = "وسيلة النشر:";
    complaint = "الجهة المدعية:";
    ddClass = "dib mr1 gray";
    link = `/ar/cases/${data.id}`;

    platformData = data["وسيلة النشر"];
    complaintData = data["Complaint_ar"];
    description = data["ماذا حصل؟"];
    name = `${data["Name_ar"]} - ${data["Year"]}`;
  }

  return (
    <div
      className="flex-auto center"
      style={{ backgroundColor: "#FFFCEB", backgroundSize: "cover" }}
    >
      <Box />
      <Link href={link}>
        <a
          style={{ textDecoration: "none", color: "black" }}
          className="mv4 mh4 center"
        >
          <article
            className="bg-white db  mw5 hidden  mr4 mt0 ml4 "
            style={{ "border-radius": "0px 0px 20px 20px" }}
          >
            <div className="pa3 bt b--black-10  ">
              <dl className="f6 lh-title mv2 ">
                <dt className="dib b">{platform} </dt>
                <dd className={ddClass}>{platformData}</dd>
              </dl>
              <dl className="f6 lh-title mv2">
                <dt className="dib b">{complaint}</dt>
                <dd className={ddClass}>{complaintData}</dd>
              </dl>
              <dl className="f6 lh-title mv2">{imagesToDisplay}</dl>

              <p className="f6 f5-ns lh-copy measure">
                {substr(description, 130)}
              </p>
              <h1 className="f4 bg-near-white br--top black-80 mv0 pv2 ph3 tracked-tight">
                {name}
              </h1>
            </div>
          </article>
        </a>
      </Link>
    </div>
  );
}
