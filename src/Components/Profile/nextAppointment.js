import React from "react";
import { Table, Button, Container } from "reactstrap";



const NextAppointment = props => {
  return (
    <div>
      <Container className="table-responsive-sm">
        <Table hover >
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
            {props.pending.map((app, key) => {
              return (
                <tr key={key}>
                  <td>{app.name}</td>
                  <td>{app.selected_date.substring(0, 10)}</td>
                  <td>
                    {app.hour_init} - {app.hour_end}
                  </td>
                  <td>{app.price}</td>
                  <td>
                    {app.canceled===1 ? (
                      <div>Cancelado</div>
                    ) : (
                      <Button id="mainbutton" onClick={()=>props.cancel(app.id_appointment)}>Cancelar</Button>
                    )}
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

export default NextAppointment;
