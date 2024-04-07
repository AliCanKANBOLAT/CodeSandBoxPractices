import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleChange(event) {
    setName(event.target.value)
   
  }

  function handleClick(event) {
    event.preventDefault();
    setSubmittedName(name)
  }

  return (
    <div className="container">
      <h1>Hello {submittedName} </h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
