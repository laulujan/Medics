import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

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
        <Container>
            <Row>
                <Col>
                <InputGroup>
                    <Input placeholder="Especialidad" 
                    bsSize="lg" 
                    onChange={this.onChange} />
                    <InputGroupAddon addonType="append">
                    <Link  to={{ pathname:'/search', especialidad: this.state.speciality }}>
                        <Button outline color="info" size="lg">Buscar</Button>
                    </Link>
                    </InputGroupAddon>
                </InputGroup>
                </Col>
            </Row>
        </Container>
        </>
    }
}
export default Main;