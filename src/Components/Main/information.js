import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Button , Container, Row, Col} from 'reactstrap';

const Information = (props) => {
    return (
      <div>
        <Jumbotron fluid>
        <Container fluid >
          <h1 className="display-5">Recomendaciones Generales </h1>
          <p className="lead">COVID-19</p>
          <hr className="my-2" />
            <Container fluid className="banner">
                <Row>
                    <Col>
                    <img src='img/cv1.png' fluid />
                    <img src='img/cv2.png' fluid />
                    </Col> 
                </Row>
                <Row>
                    <Col>
                    <img src='img/cv3.png' fluid />
                    <img src='img/cv4.png' fluid />
                    </Col>
                </Row>
            </Container>
          <p className="lead"  >
            <Button id="mainbutton" className="float-right">Mas información</Button>
          </p>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default Information;