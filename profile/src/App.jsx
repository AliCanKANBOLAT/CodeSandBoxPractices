// https://randomuser.me/api?results=5
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Card from "./components/Card"


export default function App () {
  const [user, setUser] = useState([])
  const getUser = async () => {
    try {
      const userList = await axios.get("https://randomuser.me/api?results=5")
      setUser(userList.data.results)
    } catch (error) {
      console.log("error fetchtign data", error)
    }
  }
  useEffect(()=> {
    getUser()
  },[])

  console.log(user)
  return(
    <ul>
    {
      user.map((user,index)=>(
        <li key={index}>
           <Card user={user}/>
            </li>
      ))
    }
    </ul>
  );
}