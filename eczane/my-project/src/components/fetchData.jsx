import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"

const key = import.meta.env.VITE_APIKEY;
const url = "https://api.collectapi.com/health/dutyPharmacy";

export default function FetchData () {
  const [eczane, setEczane] = useState([])
  const fetchEczane = async() => {
    try {
      const response = await axios.get(url,{
        params: {
          ilce: "Mamak",
          il : "Ankara"
        },
        headers : {
          authorization : `apikey ${key}`
        }
      }
        
      )
      setEczane(response.data.result)
      console.log(response.data.result)
    } catch (error) {
     console.error("error fetching data...") 
    }
  }

  useEffect(()=> {
    fetchEczane()
  },[])
  return(
    <>
    <ul>
    {
      eczane.map((item,index)=>(
        <li key={index}> <Card item={item} /> </li>
      ))
    }
    </ul>
    </>
  )
}