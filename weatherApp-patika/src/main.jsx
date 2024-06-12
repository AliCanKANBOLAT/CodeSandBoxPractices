import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './Components/Container.jsx'
import Row from './Components/Row.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { WeatherProvider } from './Components/WeatherContext.jsx'
import "./style.css"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherProvider>
    <Container className="mt-5">
      <Row className= "mx-5 bg-info border border-info">
        <App />
    </Row>
    </Container>
    </WeatherProvider>
  </React.StrictMode>,
)
