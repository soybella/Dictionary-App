import React from "react";
import "./Examples.css";

export default function Examples(props) {
  console.log(props.examples);
  if (props.examples) {
    return (
      <div className="Examples">
        <p>
          <b>example:</b> {props.examples}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
