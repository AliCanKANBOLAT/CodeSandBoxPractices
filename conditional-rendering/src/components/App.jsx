import React from "react";
import Login from "./Login";


let isLoggedIn = false;

// const currentTime = new Date().getHours()
// console.log(currentTime)


function App() {
  return (
    <div className="container">
     { isLoggedIn ?  <h1>Welcome on board ...</h1> : <Login />}

     {/* {currentTime > 4 && <h1>it is too early to do something...</h1>} */}
       </div>
  );
}

export default App;
