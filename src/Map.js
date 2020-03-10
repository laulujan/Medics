import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
//import Marker from "google-map-react";
import {apiKey} from './config/privat';
import getDoctor from './Services/places';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      isLoaded: false //flag is map loaded? indica cuando esta esperando el response dl request
    };

    this.searchDoctor();
  }

  searchDoctor = async () => {
    let places = await getDoctor(this.props.search, this.props.lat, this.props.lng)
    
    this.setState({
      places: places.data.results,
      isLoaded: true // el flag cambia a true cuando recibe el response
    });
    
    return places.data.results;
}
  static defaultProps = {
    zoom: 14 //zoom del mapa(libreria)
  };

  render() {
    const { places } = this.state;

    return this.state.isLoaded ? (
      <div style={{ height: 500, width: "70%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          
          {//recorre los lugares(vienen en un array) encontrados y los dibuja en el mapa en cada lugar tiene 
          //su lat y lng
          }
          {places.map(place => {
            return (
              <AnyReactComponent
                key={place.id}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                text={place.name}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    ): ( <div>LOADING </div>)
  }
}
