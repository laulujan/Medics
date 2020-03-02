import React, {Component} from 'react';
import { geolocated } from "react-geolocated";
import getDoctor from './Services/places';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.inputText=React.createRef();
  }
  
  searchDoctor = async () => {
    console.log(this.inputText.current.value)
    await getDoctor(this.inputText.current.value, this.props.coords.latitude, this.props.coords.longitude)

  }

  render() {
    return !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
       <div>
          <input type="text" ref={this.inputText}></input>
          <button onClick={this.searchDoctor}>Buscar</button>
       </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
