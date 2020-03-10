import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import './styles.css'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            speciality: "",
        }
    }

    onChange=(e)=>{
        const speciality = e.target.value;
        this.setState({speciality})
    }
    render (){
        return <>
        <Container >
            <Row>
                <Col lg="7" sm ="12">
                <div>
                    <img src="img/doctors2.png" className="img-fluid"></img>
                </div>
                </Col>
                <Col lg="5" sm="12">
                <div className="div-center">
                    <div className="content">
                        <Input placeholder="Especialidad" 
                    bsSize="lg" 
                    onChange={this.onChange} />
                    </div>
                    <div className="content"> 
                        <Link  to={{ pathname:'/search', especialidad: this.state.speciality }}>
                        <Button outline color="info" size="lg" block>Buscar</Button>
                    </Link>
                    </div>
                </div>
                </Col>
            </Row>

        </Container>
        </>
    }
}
export default Main;