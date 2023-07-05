import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  // console.log(props.definition);
  if (props.results) {
    return (
      <div className="Results p-3">
        <h2>{props.results.word}</h2>
        <div className=" mt-3 pt-3 border mb-3">
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
