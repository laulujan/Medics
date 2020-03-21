import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";
import classnames from "classnames";

const Profile = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Citas confirmadas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Citas pasadas
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
             
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
             
            </Row>
          </TabPane>
        </TabContent>
      </Container>
      <Container>
        <Row>
          <Col>
           <Button>Agendar otra cita</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
