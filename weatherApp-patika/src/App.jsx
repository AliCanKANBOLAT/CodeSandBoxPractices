import { useState } from 'react'
import Navbar from './Components/Navbar'
import DataFetching from './Components/dataFetching'


function App() {
  const [location, setLocation] = useState("Istanbul")

  

  return (
    <div className='col-sm-12 border'>
      <Navbar />
      <DataFetching />
    </div>
  )
}

export default App
