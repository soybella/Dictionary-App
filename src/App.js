import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header mt-5 pb-3">
        <h1> Dictionary </h1>
      </header>
      <main>
        <p>search for a word:</p>
        <Dictionary />
      </main>
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
    </div>
  );
}

export default App;
