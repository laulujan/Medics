import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
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
                {place.vicinity}
              </ListGroupItemText>
              <Button> Cita </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    ) : (
      <div>LOADING </div>
    );
  }
}

export default lista;
