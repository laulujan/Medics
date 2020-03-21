import React from 'react';
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
                    <img src='img/infograph1.png' alt="recomendations" fluid />
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