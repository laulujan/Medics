import React, {useState} from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import DayPicker from './dayPicker'
import "react-day-picker/lib/style.css";

function RenderHours(props){
  if(props.selectedDate === null){
    return <div></div>
  }

  console.log("esta es la fecha,", props.selectedDate)
  let hoursDiv = [<option key="0" value="">Seleccionar horario</option>];

  props.schedule.working_hours.map((h, key)=>{
    console.log(h)
    let min = h[0]
    let max = h[1]

    for (let now_hour= min; now_hour<max; now_hour = now_hour +.5) {
      if(props.selectedDate in props.schedule.unabled_hours){
        console.log("si encontro fecha")
        let isFound = false;
        props.schedule.unabled_hours[props.selectedDate].map((unableHour) => {
          if(unableHour[0] === now_hour ){
            console.log("fecha ocupada")
            isFound = true;
          }

        })
        if(!isFound){
          hoursDiv.push(<option key={now_hour} value={now_hour}>{now_hour} - {now_hour+.5}</option>)
        }
      }else{
        hoursDiv.push(<option key={now_hour} value={now_hour}>{now_hour} - {now_hour+.5}</option>)
      }
    }
  })
return <Input type="select" name="select" id="hour" onChange={(x) => props.whenSelectHour(x)}>{hoursDiv}</Input>
}



const FormBooking = props => {
  console.log(props.schedule);
  const [showHours, setShowHours] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const whenSelectDate = (date) => {
    console.log(date.toISOString().substring(0,10));
    console.log(props);
    setSelectedDate(date.toISOString().substring(0,10))
  }

  const whenSelectHour = (hour)=>{
    props.formData({
      hora: hour.target.value,
      fecha: selectedDate,
      idDoctor: props.schedule.idDoctor
    }) 
  }
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <DayPicker className="form-control" selectedDate={selectedDate} whenSelectDate={whenSelectDate}></DayPicker>
          </FormGroup>
        </Col>
      </Row>
      <RenderHours {...props} whenSelectHour={whenSelectHour}/>
      <Row style={{display: showHours ? 'block' : 'none'}}>
        <Col>
        
        </Col>
        
      </Row>
    </Form>
  );
};

export default FormBooking;
