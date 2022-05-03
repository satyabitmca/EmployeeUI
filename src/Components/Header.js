import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Navbar>
          <Nav>
            <NavItem>
              <Link to="/">
                <h4>Home</h4>
              </Link>
            </NavItem>
          </Nav>

          <Nav>
            <NavItem>
              <Link to="/addemployee">
                <h4>&nbsp;&nbsp;Add new employee</h4>
              </Link>
            </NavItem>
          </Nav>         
        </Navbar>
      </div>
    );
  }
}
export default Header;
