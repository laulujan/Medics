import React from 'react';
import { Jumbotron, Button , Container, Row, Col} from 'reactstrap';
import "./styles.css";

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
                    <img src='img/infograph1.png' alt="recomendations" />
                    </Col> 
                </Row>
            </Container>
          <p className="lead"  >
            <Button id="mainbutton" className="float-right">
              <a href="https://coronavirus.gob.mx/" id="link">Mas información</a>
            </Button>
          </p>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default Information;