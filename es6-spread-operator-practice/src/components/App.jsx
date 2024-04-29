import React, { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const HandleClick = () => {
    const value = document.querySelector("#inputId").value
    console.log(value)
    setTodoItem( prev => [...prev,value])
    document.querySelector("#inputId").value = "";

  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" id="inputId" />
        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItem.map((item,index) => (<li key={index}> {item} </li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
