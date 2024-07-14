import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import axios from 'axios';
import WeatherContext from "./WeatherContext";
import CITIES from "./TurkeyCities";
import WeatherCards from "./WeatherCards";

export default function DataFetching() {
  const { selectedCity, location, setWeatherData } = useContext(WeatherContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const KEY = import.meta.env.VITE_API_KEY;

  const fetchData = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${latitude},${longitude}&days=7&aqi=yes&alerts=yes`);
      setWeatherData(response.data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

 

  useEffect(() => {
    if(!selectedCity) {
      fetchData(41.0082, 28.9784);
    }
    if (selectedCity) {
      const city = CITIES.find(c => c.name === selectedCity.name);
      if (city) {
        fetchData(city.latitude, city.longitude);
      }
    }
  }, [selectedCity, location]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }



  return(
    <WeatherCards />
  )
}
