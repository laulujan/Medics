import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { geolocated } from "react-geolocated";
import { Container, Row, Col} from 'reactstrap';
import servicePlaces from '../../Services/places';
import Lista from '../List';
import ModalForm from '../Modal/modal';
import Map from '../../Map'
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            places: [],
            isLoaded: false, //flag is map loaded? indica cuando esta esperando el response dl request
            modalIsOpen: false,
            isModalDataLoaded: false,
            doctorSchedule: {},
            redirectToProfile: false,
        };
          
        
    }

    
  searchDoctor = async () => {
      console.log(this.props);
      console.log('hola');
      if(this.props.coords === null){
          await new Promise ( r => setTimeout(r, 1000));
      }
    let places = await servicePlaces.getDoctor(this.props.location.especialidad, this.props.coords.latitude, this.props.coords.longitude)
    
    this.setState({
      places: places.data,
      isLoaded: true // el flag cambia a true cuando recibe el response
    });
    
    return places.data;
}

    agendar = async (id) => {
        this.setState({
            modalIsOpen: true
        });

        let scheduleData = await servicePlaces.getSchedule(id);

        scheduleData.data.place = this.state.places.filter((place) => place.id === id )[0];
        this.setState({
            doctorSchedule: scheduleData.data,
            isModalDataLoaded: true
        })
    }
    
    toggle = () =>{
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }
    save = async (data) => {
        console.log(data)
        let res = await servicePlaces.createAppointment(data)
        if(res.data.status === "ok"){
            console.log("redirect to profile")
            this.setState({redirectToProfile: true})
        }
    }

    render(){
        if(this.state.isLoaded === false){
            this.searchDoctor();
        }

        if(this.state.redirectToProfile === true){
            return <Redirect to='/profile'/>
        }
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <Container>
                <Row>
                    <Col lg="7" sm="12">
                    <div >
                        <Map places={this.state.places} isLoaded={this.state.isLoaded} 
                        lat={this.props.coords.latitude} lng={this.props.coords.longitude} agendar={this.agendar} />
                    </div>
                    </Col>
                    <Col lg="5" sm="12">
                        <div>
                            <Lista places={this.state.places} isLoaded={this.state.isLoaded} agendar={this.agendar} />
                        </div>
                    </Col>
                </Row>
                <ModalForm toggle ={this.toggle} 
                isOpen={this.state.modalIsOpen} 
                save={this.save} 
                dataLoaded={this.state.isModalDataLoaded}
                schedule={this.state.doctorSchedule}
                />
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