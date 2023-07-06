import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header mt-5 pb-3">
        <h1> Dictionary </h1>
      </header>
      <main>
        <p>search for a word:</p>
        <Dictionary defaultKeyword="hello" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
