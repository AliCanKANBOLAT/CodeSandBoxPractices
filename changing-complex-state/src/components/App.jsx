import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName:"",
    lName:""
  });

  function updateFullName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

      // const { value, name } = event.target  =>>> inputName = name  , newValue = value   


    if(inputName === "fName") {
      setFullName(prev =>  {
        return {
          ...prev,
          fName: newValue
        };
      });
    } else if ( inputName === "lName") {
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
