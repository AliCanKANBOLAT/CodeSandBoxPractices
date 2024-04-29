import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName:"",
    lName:""
  });

  function updateFullName(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    if(name === "fName") {
      setFullName(prev =>  {
        return {
          ...prev,
          fName: newValue
        };
      });
    } else if ( name === "lName") {
      setFullName(prev => {
        return {
          ...prev,
          lName: newValue
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input name="fName" onChange={updateFullName} placeholder="First Name" value={fullName.fName} />
        <input name="lName" onChange={updateFullName} placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
