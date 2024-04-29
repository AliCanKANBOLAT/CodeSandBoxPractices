import React from "react";
import { useState } from "react";



function App() {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")

   function HandleChangeF(event) {
    const newValue = event.target.value
    setFName(newValue)
   }

   function HandleChangeL(event) {
    const newValue = event.target.value
    setLName(newValue)
   }


  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input name="fName" onChange={HandleChangeF} placeholder="First Name" value={fName} />
        <input name="lName" onChange={HandleChangeL} placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
