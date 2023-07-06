import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    // console.log(response.data);
    // console.log(response.data);
    setResults(response.data);
  }

  function search() {
    let apiKey = "aeb70a31839f16b6t1e99ad4f4bo55e4";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Ex: wine, sunset.."
            onChange={handleKeywordChange}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
