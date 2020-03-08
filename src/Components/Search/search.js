import React from 'react';
import { geolocated } from "react-geolocated";

import getDoctor from './Services/places';
import Map from './Map'
/*
constructor(props){
    super(props);
    this.inputText=React.createRef();
    this.state = {
      places: [],
    };
  }
  
  searchDoctor = async () => {
    console.log(this.inputText.current.value)
    let places = await getDoctor(this.inputText.current.value, this.props.coords.latitude, this.props.coords.longitude)
    
    this.setState({
      places: places.data.results
    });
    
  }
  */
function Search (){
    const onClickFunc = event => {
        if(username === user && password === pass){
            console.log("access granted");
        }else{
            console.log("access denied");
        }

    }
    const [user, setUser] = useState("");
    const onHandleChangeUser = event => setUser(event.target.value);
    const [pass, setPass] = useState("");
    const onHandleChangePassword = event => setPass(event.target.value);

    return !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
       <div>
          <input type="text" ref={this.inputText}></input>
          <button onClick={this.searchDoctor}>Buscar</button>
          <Map places={this.state.places} lat={this.props.coords.latitude} lng={this.props.coords.longitude}/>
       </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Search);