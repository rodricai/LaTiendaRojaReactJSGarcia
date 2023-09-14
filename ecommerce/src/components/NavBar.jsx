import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





export const NavBar = () => (
    
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LA TIENDA ROJA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/category/futbol">Futbol</Nav.Link>
            <Nav.Link href="/category/abrigo">Abrigos</Nav.Link>
            <Nav.Link href="/category/accesorios">Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
);
