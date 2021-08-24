import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href='/react-pages/'>Home</Nav.Link>
          <Nav.Link href='/react-pages/qiita'>Qiita</Nav.Link>
          <Nav.Link href='/react-pages/blog'>Blog</Nav.Link>
        </Nav>
      </Navbar >
    </div>
  );
}

export default MyNavbar;
