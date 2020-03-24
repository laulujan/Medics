import React, { Component } from "react";
import { Button, Input, Container, Row, Col, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import Information from "./information";

import "./styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speciality: ""
    };
  }

  onChange = e => {
    const speciality = e.target.value;
    this.setState({ speciality });
  };
  
  onClick= e => {
    if(!this.state.speciality) {
      e.preventDefault();
      
    } 
  };
  

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col lg="6" sm="12">
              <Jumbotron >
                <Container  id="main-container">
                  <h1 className="display-4">
                    {" "}
                    Encuentra tu especialista médico
                  </h1>
                  <Container>
                    <div>
                      <Input
                        placeholder="Especialidad"
                        onChange={this.onChange}
                      />
                    </div>
                    <div>
                      <Link
                        to={{
                          pathname: "/search",
                          especialidad: this.state.speciality
                        }}
                      >
                        <Button block id="mainbutton" onClick={(event) => this.onClick(event)}>
                          Buscar
                        </Button>
                      </Link>
                    </div>
                  </Container>
                </Container>
              </Jumbotron>
            </Col>
            <Col lg="6" sm="12">
              <Information />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Main;
