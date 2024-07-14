import { useState } from 'react'
import './App.css'
import FetchData from './components/fetchData'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 flex flex-col items-center justify-center">
        <FetchData />
      </div>
    </div>
  );
}

export default App
