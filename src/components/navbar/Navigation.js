import React, { Component } from "react";
import "./navigation-style.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      navbarbackgroundcolor: "transparent"
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
     
    });
  };
  listenScrollEvent = e => {
    if (window.scrollY > 10 ) {
      this.setState({ navbarbackgroundcolor: "#333333" });
    } else {
      this.setState({ navbarbackgroundcolor: "transparent" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <Navbar 
        style={{ backgroundColor: this.state.navbarbackgroundcolor }}
        
        dark
        expand="md"
      >
        <NavbarBrand exact tag={RRNavLink} to="/">
          <p>LAKHIDA TECH</p>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <div className="navdivider">
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/" activeClassName="active">
                  HOME
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle  nav caret>
                  SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem tag={RRNavLink} to="/services">SERVICES</DropdownItem>
                <DropdownItem divider />
                  <DropdownItem tag={RRNavLink} to="/services">Sharepoint Development</DropdownItem>
                  <DropdownItem tag={RRNavLink} to="/services">Sharepoint Admin</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={RRNavLink} to="/services">Java Backend Development</DropdownItem>
                  <DropdownItem>Java Full Stack Development</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={RRNavLink} to="/services">React/Redux Development</DropdownItem>
                  <DropdownItem tag={RRNavLink} to="/services">Full Stack Node Development</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={RRNavLink} to="/login" activeClassName="active">
                  SIGN IN
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/Passwordresetform" activeClassName="active">
                 Password Reset
                </NavLink>
              </NavItem>

               <NavItem>
                <NavLink tag={RRNavLink} to="/ActivationForm" activeClassName="active">
                 Activate
                </NavLink>
              </NavItem>
            </div>


            <div className="navdivider">
              <NavItem>
                <NavLink tag={RRNavLink} to="/signup" activeClassName="active">
                  SIGN UP{" "}
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/contact" activeClassName="active">
                  CONTACT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/aboutus" activeClassName="active">
                  ABOUT US
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
