import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
//import Marker from "google-map-react";
import {apiKey} from './config/privat';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

export default class Map extends Component {
  constructor(props) {
    super(props);

  }

  static defaultProps = {
    zoom: 14 //zoom del mapa(libreria)
  };

  render() {
    const { places } = this.props;

    return this.props.isLoaded ? (
      <div style={{ height: 400, width: "100%" }}>
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
                lat={place.lat}
                lng={place.lng}
                text={place.name}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    ): ( <div>LOADING </div>)
  }
}
