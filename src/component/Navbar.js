import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/"> flickr</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/mygalery/">
                {" "}
                My Galery
              </Link>
            </NavItem>
            <NavItem>
              <a
                className="nav-link"
                href="https://github.com/ozy-ahmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Username
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My profile</DropdownItem>
                <DropdownItem>Setting</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
