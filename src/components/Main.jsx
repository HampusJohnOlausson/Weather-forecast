import React from 'react'

const Main = (props) => {


     const { location, description, temperature,  region , country , icon } = props.weatherData;

    return (
      <main>
        <div className="region-container">
          <h3>{location}</h3>
          <h5>{region}, {country}</h5>
        </div>
        <div className="icon-container">
            <img src={icon} alt="weather-icon"/>
        </div>
        <div className="temperature-container">
          <h1>
            {temperature}
            <sup>o</sup>C
          </h1>
        </div>
        <div className="description-container">
          <h4>{description}</h4>
        </div>
      </main>
    );
}

export default Main
