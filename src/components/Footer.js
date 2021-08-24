import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function Footer(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href='/react-pages/'>Home</Nav.Link>
        </Nav>
      </Navbar >
    </div>
  );
}

export default Footer;
