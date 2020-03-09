import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { geolocated } from "react-geolocated";

import Map from '../../Map'
class Search extends Component {
    constructor(props){
        super(props);
        
      }
    
    render(){
        console.log(this.props.location.especialidad);
        console.log(this.props.coords)
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
           <div>
              <Map search={this.props.location.especialidad} lat={this.props.coords.latitude} lng={this.props.coords.longitude}/>
           </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}

//export default Search;

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(withRouter(Search));