import React, { useState } from "react";
import "./App.css";
import TabularContent from "./TabularContent";

function App() {
  const [digit, setDigit] = useState();
  const [content, setContent] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
      .then((res) => res.text())
      .then((data) => {
        setContent(data.substring(0, digit).toLowerCase());
      })
      .catch((err) => console.log(err));

    setDigit(0);
  };

  return (
    <div className="app">
      <div className="header">
        <img
          src="https://invictus.in/wp-content/uploads/2020/11/cropped-New-Invictus-Logo-White-BG.png"
          alt="invictus"
        />
        <h1>TopWords Calc</h1>
        <p>words and their frequency calculator</p>
      </div>
      <form onSubmit={onsubmit} className="app__form">
        <input
          value={digit}
          onChange={(e) => setDigit(e.target.value)}
          type="number"
          placeholder="Enter number..."
        />
        <button type="submit">Submit</button>
      </form>

      <TabularContent content={content} />
    </div>
  );
}

export default App;
