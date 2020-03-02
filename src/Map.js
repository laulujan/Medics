import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "google-map-react";
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
    zoom: 14
  };

  render() {
    const { places } = this.props;

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
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
    );
  }
}
