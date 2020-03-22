import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Spinner 
} from "reactstrap";

class lista extends Component {
  render() {
    const { places } = this.props;
    return this.props.isLoaded ? (
      <ListGroup>
        {places.map(place => {
          return (
            <ListGroupItem key={place.id}>
              <ListGroupItemHeading>
                {place.name}
              </ListGroupItemHeading>
              <ListGroupItemText>
                Dirección: {place.vicinity}
                <br/>
                Precio por cita $ {place.price} .00 MXN
              </ListGroupItemText>
              <Button onClick={() => this.props.agendar(place.id)}> Cita </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    ) : (
      <div>
        <Spinner color="primary" />
      </div>
    );
  }
}

export default lista;
