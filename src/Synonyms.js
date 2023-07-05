import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  //   console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h3>synonyms</h3>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index}>
              <p> {synonym} </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
