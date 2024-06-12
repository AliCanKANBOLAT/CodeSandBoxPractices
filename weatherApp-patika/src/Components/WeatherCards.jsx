import { useContext } from "react";
import WeatherContext from "./WeatherContext";

export default function WeatherCards() {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  const { location, current, forecast } = weatherData;

  return (
    <div>
      <div className="current-weather card text-bg-light mb-3 mt-2" style={{ maxWidth: '18rem' }}>
        <div className="card-header">{location.name}, {location.country}</div>
        <div className="card-body">
          <h5 className="card-title">Current Weather</h5>
          <img src={current.condition.icon} alt={current.condition.text} />
          <p className="card-text">Temperature: {current.temp_c} °C</p>
          <p className="card-text">Condition: {current.condition.text}</p>
          <p className="card-text">Wind: {current.wind_kph} kph {current.wind_dir}</p>
          <p className="card-text">Humidity: {current.humidity} %</p>
          <p className="card-text">Precipitation: {current.precip_mm} mm</p>
          <p className="card-text">Visibility: {current.vis_km} km</p>
        </div>
      </div>
      <div className="forecast-container d-flex flex-wrap">
        {forecast.forecastday.map((day, index) => (
          <div key={index} className={`forecast-card card text-bg-light mb-3 mx-2 ${index === 0 ? 'border' : ''}`} style={{ maxWidth: '26rem' }}>
            <div className="card-header">
              {day.date} <p></p> {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
            </div>
            <div className="card-body">
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <p className="card-text">Max Temp: {day.day.maxtemp_c} °C</p>
              <p className="card-text">Min Temp: {day.day.mintemp_c} °C</p>
              <p className="card-text">Avg Temp: {day.day.avgtemp_c} °C</p>
              <p className="card-text">Condition: {day.day.condition.text}</p>
              <p className="card-text">Max Wind: {day.day.maxwind_kph} kph</p>
              <p className="card-text">Precipitation: {day.day.totalprecip_mm} mm</p>
              <p className="card-text">Visibility: {day.day.avgvis_km} km</p>
              <p className="card-text">Humidity: {day.day.avghumidity} %</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
