import React from "react";
import "../css-components/NavBar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">EdFellow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <FormControl className='searchBar' type="text" placeholder="Search" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">For Bussiness</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Button variant="secondary">Log In</Button>
          <Button variant="secondary">Sign Up</Button>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    // <div className='top-nav'>
    //     <img src="" alt="logo" />
    //     <h4><FontAwesomeIcon icon = {faCartPlus} />Categories</h4>
    //     <button><input className="nav-input" type="search" value="" /><FontAwesomeIcon icon = {faSearch} /></button>
    //     <h4>For Bussiness</h4>
    //     <button>Log In</button>
    //<button>Sign Up</button>
    // </div>
  );
}

export default NavBar;
