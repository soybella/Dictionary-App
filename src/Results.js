import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  // console.log(props.definition);
  if (props.results) {
    return (
      <div className="Results pt-4">
        <h1>{props.results.word}</h1>
        <div className="pt-3 border m-4">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
