import React, { useState, useEffect } from "react";
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
import {Link} from 'react-router-dom';
import classnames from "classnames";
import Services from "../../Services/places";
import NextAppointment from "./nextAppointment";
import PastAppointment from "./pastAppointment";

const Profile = props => {
  const [pending, setPending] = useState([]);
  const [past, setPast] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [reload, setReload] = useState(0);
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await Services.getAppointments(1);
      setPending(result.data.pending);
      setPast(result.data.past);
    };
    fetchData();
  }, [reload, setReload]);

  const cancel = async function(id) {
    await Services.cancelAppointment(id);
    const result = await Services.getAppointments(1);
    setPending(result.data.pending);
    setPast(result.data.past);
  };

  const deleted = async function(id) {
    await Services.deleteAppointment(id);
    const result = await Services.getAppointments(1);
    setPending(result.data.pending);
    setPast(result.data.past);
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
              Citas Anteriores
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <NextAppointment pending={pending} cancel={cancel} />
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <PastAppointment past={past} deleted={deleted} />
            </Row>
          </TabPane>
        </TabContent>
      </Container>
      <Container>
        <Row>
          <Col>
            <Link
              to={{ pathname: "/"}}>
              <Button id="mainbutton">
                Agendar otra cita
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
