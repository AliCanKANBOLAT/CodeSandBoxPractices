import React, { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [location, setLocation] = useState({latitude: 41.0681344, longitude: 28.7965184 });
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  function selectCity(city) {
    setSelectedCity(city);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
          
        }
      );
    } 
  }, []);

  return (
    <WeatherContext.Provider value={{ location, selectedCity, selectCity, setWeatherData, weatherData, setSelectedCity }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
