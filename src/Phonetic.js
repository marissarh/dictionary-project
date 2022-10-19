import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />

      <em>{props.phonetic.text}</em>
    </div>
  );
}
