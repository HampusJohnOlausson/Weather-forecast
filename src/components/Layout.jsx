import React, { Component } from 'react'
import Header from './Header'
 import Main from './Main'
import axios from "axios";

export default class Layout extends Component {
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
    data: {},
    inputUser: ''
  };

  componentDidMount() {
    // get device current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        this.setState({ coords: newCoords });

        //Api
        axios
          .get(
            `http://api.weatherstack.com/current?access_key=92bce988b9016eae571b967acf532f4c&query=
          ${this.state.coords.latitude},
          ${this.state.coords.longitude}`
          )
          .then((res) => {
            let weatherData = {
              location: res.data.location.name,
              temperature: res.data.current.temperature,
              description: res.data.current.weather_descriptions[0],
              region: res.data.location.region,
              country: res.data.location.country,
              icon: res.data.current.weather_icons,
            };

            this.setState({ data: weatherData });
          });
      });
    } else {
      console.log("Your device is not supported by navigator geolocation!");
    }
  }

  changeLocation = (value) => {
    this.setState({ inputUser: value })
  }

  changeWeather = (event) => {
    
    event.preventDefault();
    axios.get(
      `http://api.weatherstack.com/current?access_key=92bce988b9016eae571b967acf532f4c&query=${this.state.inputUser}`
    ).then(res => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        icon: res.data.current.weather_icons,
      };

      this.setState({ data: weatherData });
    }).catch(error => {
       
       alert('Couldnt find the location!')
    })
  }

  render() {
    return (
      <>
        <Header 
        changeWeather={this.changeWeather}
        changeLocation={this.changeLocation} />
        <Main 
        weatherData={this.state.data} />
      </>
    );
  }
}
