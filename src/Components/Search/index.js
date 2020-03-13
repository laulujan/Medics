import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { geolocated } from "react-geolocated";
import { Container, Row, Col} from 'reactstrap';
import getDoctor from '../../Services/places';
import Lista from '../List'

import Map from '../../Map'
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            places: [],
            isLoaded: false //flag is map loaded? indica cuando esta esperando el response dl request
          };
          
        
    }

    
  searchDoctor = async () => {
      console.log(this.props);
      console.log('hola');
      if(this.props.coords === null){
          await new Promise ( r => setTimeout(r, 1000));
      }
    let places = await getDoctor(this.props.location.especialidad, this.props.coords.latitude, this.props.coords.longitude)
    
    this.setState({
      places: places.data.results,
      isLoaded: true // el flag cambia a true cuando recibe el response
    });
    
    return places.data.results;
}
    
    render(){
        if(this.state.isLoaded === false){
            this.searchDoctor();
        }

        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <Container>
                <Row>
                    <Col lg="7" sm="12">
                    <div>
                        <Map places={this.state.places} isLoaded={this.state.isLoaded} 
                        lat={this.props.coords.latitude} lng={this.props.coords.longitude}/>
                    </div>
                    </Col>
                    <Col lg="5" sm="12">
                        <div>
                            <Lista places={this.state.places} isLoaded={this.state.isLoaded} />
                        </div>
                    </Col>
                </Row>
            </Container>
           
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