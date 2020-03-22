import React from "react";
import { Table, Button, Container } from "reactstrap";

const PastAppointment = props => {
  return (
    <div>
      <Container className="table-responsive-sm">
        <Table hover>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {props.past.map((app, key) => {
              return (
                <tr key={key}>
                  <td>{app.name}</td>
                  <td>{app.selected_date}</td>
                  <td>
                    {app.hour_init} - {app.hour_end}
                  </td>
                  <td>{app.price}</td>
                  <td>
                    <Button onClick={()=>props.deleted(app.id_appointment)}>Eliminar</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PastAppointment;
