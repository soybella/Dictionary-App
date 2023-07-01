import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header pt-5">
        <h1> Dictionary </h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="mt-3">Coded with ♥︎ by Isabella Lizarde</footer>
    </div>
  );
}

export default App;
