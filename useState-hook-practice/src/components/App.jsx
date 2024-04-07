import React, { useEffect, useState } from "react";

function App() {
  const [clock, setClock] = useState("");
  const [intervalId, setIntervalId] = useState(null);

  const getTime = () => {
    const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setClock(currentTime);
  };

  const gotTime = () => {
    getTime();
  };
  const stopContTime = () => {
    clearInterval(intervalId)
    setIntervalId(null);
  }


  const gotContTime = () => {
    if (!intervalId) {
      const newIntervalId = setInterval(() => {
        getTime();
      }, 1000);
      setIntervalId(newIntervalId);
    }

  };

  return (
    <div className="container">
      <h1>{clock}</h1>
      <button onClick={gotTime}>Get Time once</button>
      <button onClick={gotContTime}>Get Time Continuously</button>
      <button onClick={stopContTime}>Stop Continuously Time</button>
    </div>
  );
}

export default App;
