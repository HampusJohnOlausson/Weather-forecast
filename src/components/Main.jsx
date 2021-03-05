import React from 'react'
import '../style/main.css';

const Main = (props) => {

     const { location, description, temperature,  region , country  } = props.weatherData;

    return (
      <main className="main-container">
        <div className="info-container">
          <h4 className="description">{description}</h4>
          <h2 className="degrees">{temperature}°c</h2>
          <div className="region-container">
            <h3 className="location">{location}</h3>
            <h5 className="city">
              {region}, {country}
            </h5>
          </div>
        </div>
      </main>
    );
}

export default Main
