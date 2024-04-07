import React from "react";
import { useState } from "react"



function App() {
const [count, setCount] = useState(0)

function increaseValue () {
  setCount(count+1)
}

function decreaseValue() {
  setCount(count-1)
}

  return <div className="container">
  <h1>{count}</h1>
  <button onClick={increaseValue}>+</button>
  <button onClick={decreaseValue}>-</button>
</div>
}

export default App;
