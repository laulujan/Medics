import React from "react";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";

const PastAppointment = props => {
  return (
    <div>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Cancelar cita</Button>
        </Card>
      </Col>
    </div>
  );
};

export default PastAppointment;
