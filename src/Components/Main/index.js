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
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg="6" sm="12">
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-4">
                    {" "}
                    Encuentra tu especialista medico
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
                        <Button block id="mainbutton">
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
