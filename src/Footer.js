import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-2 mb-5">
      Developed with ♥︎ by{" "}
      <a
        href="https://www.linkedin.com/in/isabellalizarde/"
        target="_blank"
        rel="noreferrer"
        alt="Isabella's LinkedIn"
      >
        Isabella Lizarde,
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/soybella/dictionary-project"
        target="_blank"
        rel="noreferrer"
        alt="Isabella's Repository"
      >
        open sourced.
      </a>
    </footer>
  );
}
