import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  // function HandleChange(event) {
  //   const { name, value } = event.target;
  //   setContact(prev => {
  //     return {
  //       ...prev, // Önceki state'in tüm özellikleri korunuyor
  //       [name]: value // Yeni özelliğin adı dinamik olarak belirleniyor
  //     };
  //   });
  // }
   function HandleChange (event) {
    const { name, value} = event.target;
    if(name === "fName") {
      setContact(prev => {
        return {
        ...prev,
        fName : value
        }
      })
    } else if (name === "lName") {
      setContact(prev => {
        return {
        ...prev,
        lName : value
        }
      })
    } else if (name === "email") {
      setContact(prev => {
        return {
        ...prev,
        email : value
        }
      })
    }
  }


  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={HandleChange} placeholder="First Name" value={contact.fName}/>
        <input name="lName" onChange={HandleChange} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={HandleChange} placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
