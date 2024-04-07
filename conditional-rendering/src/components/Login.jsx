import React from "react";
import Input from "./input";

function handleClick(event) {
    event.target.preventDefault()
    console.log(event.target.id)
}
export default function Login () {
    return(
        <form className="form">
        <Input 
        id="userName" type="text" placeholder="Username"
        />
        <Input
        id="password" type="password" placeholder="Password"
         />
        <button id="submit" type="submit" onClick={handleClick} >Login</button>
        </form>
    )
}