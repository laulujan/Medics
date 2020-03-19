import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from '../Form/form'

const ModalForm= (props) => {
   
    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;
    const [formData, setFormData] = useState({})
  return (
  <div>
    <Modal isOpen={props.isOpen} toggle={props.toggle} >
      <ModalHeader toggle={props.toggle} close={closeBtn}>Agenda tu cita</ModalHeader>
      <ModalBody>
       {props.dataLoaded ? (
       <Form schedule={props.schedule} formData={setFormData}></Form>
       ) : (<div> Loading </div>)}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={()=>props.save(formData)}>Guardar</Button>{' '}
        <Button color="secondary" onClick={props.toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default ModalForm;