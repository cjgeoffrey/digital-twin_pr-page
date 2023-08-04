import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./NavBar.css";

const NavBarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      style={{ background: " #4b54fb", padding: 0 }}
      collapseOnSelect
      expand="lg">
      <Container style={{ margin: "1rem", padding: 0 }}>
        <Navbar.Brand>
          <Link className="logo" to={"/"}>
            PS-AML-DT
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          className="navbar-toggle"
          style={{ position: "fixed", right: "2rem" }}
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="linkContainer ">
            <Link to="/" onClick={() => setExpanded(false)}>
              Home
            </Link>
            <Link to="/approach" onClick={() => setExpanded(false)}>
              Our Approach
            </Link>
            <Link to="/consortium" onClick={() => setExpanded(false)}>
              Consortium
            </Link>
            <Link to="/news" onClick={() => setExpanded(false)}>
              News
            </Link>
            <Link to="/publications" onClick={() => setExpanded(false)}>
              Publications
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar
    //   expand="lg"
    //   className="bg-body-tertiary "
    //   style={{ background: " #4b54fb;" }}>
    //   <Container>
    //       <Navbar.Brand className="logo">
    //         <Link to={"/"}>PS-AML-DT</Link>
    //       </Navbar.Brand>

    //       <Navbar.Toggle
    //         className="navbar-toggle"
    //         aria-controls="responsive-navbar-nav"
    //       />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="mr-auto ">
    //           <Link to="/">Home</Link>
    //           <Link to="/concept">Our Approach</Link>
    //           <Link to="/consortium">Consortium</Link>
    //           <Link to="/news">News</Link>
    //           <Link to="/publications">Publications</Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    // </Navbar>

    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBarComponent;

{
  /* <Container>
        <header className="header">
          <Navbar.Brand to={"/"} className="logo">
            PS-AML-DT
          </Navbar.Brand>

          <Navbar.Toggle
            className="navbar-toggle"
            aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="linkContainer ">
              <Link to="/">Home</Link>
              <Link to="/concept">Our Approach</Link>
              <Link to="/consortium">Consortium</Link>
              <Link to="/news">News</Link>
              <Link to="/publications">Publications</Link>
            </div>
          </Navbar.Collapse>
        </header>
      </Container> */
}
