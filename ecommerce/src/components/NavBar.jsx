import { CartWidget } from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





export const NavBar = () => (
    
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Pantalon</Nav.Link>
            <Nav.Link href="#">Camiseta</Nav.Link>
            <Nav.Link href="#">Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
);
