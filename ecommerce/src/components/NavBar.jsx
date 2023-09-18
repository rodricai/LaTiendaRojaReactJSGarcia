import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";




export const NavBar = () => (
    
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={{color : "red"}}>LA TIENDA ROJA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{color : "white"}} as={Link} to="/category/Futbol">Futbol</Nav.Link>
            <Nav.Link style={{color : "white"}} as={Link} to="/category/Abrigos">Abrigos</Nav.Link>
            <Nav.Link style={{color : "white"}} as={Link} to="/category/Accesorios">Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
);
