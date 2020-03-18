import React, {Component} from 'react';
import { Button, Input, Container, Row, Col, Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';
import Information from './information'

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
                <Col lg="6" sm="12">
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-4"> Encuentra tu especialista medico</h1>
                            <Input placeholder="Especialidad" 
                                bsSize="lg" 
                                onChange={this.onChange} />
                            <div className="content"> 
                                <Link  to={{ pathname:'/search', especialidad: this.state.speciality }}>
                                <Button size="lg" block id="mainbutton">Buscar</Button>
                                </Link>
                            </div>
                        </Container>
                    </Jumbotron>
                </Col>
                <Col lg="6" sm ="12">
                    <Information/>
                </Col>
                
            </Row>
            
        </Container>
        <footer className="footer">
            <span> Medics 2020</span>
        </footer>
        </>
    }
}
export default Main;