import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import DayPicker from './dayPicker'
import "react-day-picker/lib/style.css";

function renderHours(props){
  let hoursDiv = [];

  props.schedule.working_hours.map((h, key)=>{
    console.log(h)
    let min = h[0]
    let max = h[1]

    for (let now_hour= min; now_hour<max; now_hour = now_hour +.5) {
      hoursDiv.push(<div key={now_hour}>{now_hour} - {now_hour+.5}</div>)
    }
  })
  return hoursDiv;
}

const FormBooking = props => {
  console.log(props.schedule);
  
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <DayPicker className="form-control"></DayPicker>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">Hora</Label>
            <Input  />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
        {renderHours(props)}
        </Col>
        
      </Row>
    </Form>
  );
};

export default FormBooking;
