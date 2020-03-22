import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {Link} from 'react-router-dom';
import "./index.css";

const userIcon = (
  <FontAwesomeIcon icon={faUserCircle} size="3x" id="userIcon" />
);

const Menu = props => {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/" className="mr-auto">
          <img src="img/logo1.png" className="logo1" alt="medics-logo" />
        </NavbarBrand>
        <div>
          <Link to={{ pathname: "/profile" }}>{userIcon}</Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Menu;
