import React, { useContext } from "react";
import WeatherContext from "./WeatherContext";
import CITIES from "./TurkeyCities";

const KEY = import.meta.env.VITE_API_KEY;

export default function Navbar() {
  const { location, selectedCity, selectCity } = useContext(WeatherContext);

  function handleClick(city) {
    if (!city) {
      selectCity(location); // Eğer tıklanan şehir yoksa, mevcut konumu seç
    } else {
      selectCity(city); // Aksi halde tıklanan şehri seç
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        Weather Conditions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {!selectedCity || !selectedCity.name ? 
                (location && location.name ? location.name : "Istanbul") : 
                selectedCity.name}
              </a>
              <ul className="dropdown-menu" style={{ minWidth: "450px" }}>
                <div className="row row-cols-3">
                  {CITIES.map((city, index) => (
                    <div className="col" key={index}>
                      <li className="list-group-item">
                        <div
                          onClick={() => handleClick(city)}
                          className="d-grid gap-2"
                        >
                          <button type="button" className="btn btn-sm btn-outline-info">
                            {city.name}
                          </button>
                        </div>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
