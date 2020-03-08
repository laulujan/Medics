import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import './index.css'

class Menu extends Component{
    render(){
        return  <div>
        <Navbar expand="md">
          <NavbarBrand href="/">
              <img src='img/logo1.png' className="logo1"></img>
          </NavbarBrand>
        </Navbar>
        </div>   
    }
}    

export default Menu;
