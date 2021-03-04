import './App.css';
import React from 'react'
import Layout from './components/Layout';

class App extends React.Component {

  state = {
    coords: {
      latitude: 45,
      longitude: 60
    }
  }

  componentDidMount(){
    // get device current location
    if(navigator.geolocation){
      
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({ coords: newCoords });

      })

    } else {
      console.log('Not supported')
    }
  }

  render(){
    return (
      <>
        <Layout />
      </>
    );
  }
}

export default App;
