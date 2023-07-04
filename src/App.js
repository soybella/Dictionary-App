import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header pt-5 pb-3">
        <h1> Dictionary </h1>
      </header>
      <main>
        <p>Search for a word:</p>
        <Dictionary />
      </main>
      <br />
      <footer>Coded with ♥︎ by Isabella Lizarde</footer>
    </div>
  );
}

export default App;
