import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import {apiKey} from './config/privat';
import icon from './img/blu-blank.png';
import icon1 from './img/ylw-circle.png';
import { Spinner } from 'reactstrap';


const AnyReactComponent = ({ agendarFn, id }) => <div onClick={() => agendarFn(id)} ><img alt="results-icon" src={icon} width="24px" height="24px"/></div>;

const MyLocation = ({ text }) => <div><img alt="place-icon" src={icon1} width="24px" height="24px"/></div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

export default class Map extends Component {

  static defaultProps = {
    zoom: 14 ,
    //zoom del mapa(libreria)
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
          <MyLocation
                lat={this.props.lat}
                lng={ this.props.lng}
              />
          {places.map(place => {
            return (
              <AnyReactComponent
                key={place.id}
                lat={place.lat}
                lng={place.lng}
                text={place.name}
                id={place.id}
                agendarFn={this.props.agendar}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    ): ( <div> <Spinner color="primary" /></div>)
  }
}
