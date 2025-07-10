import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Mihkli veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
            <Nav.Link as={Link} to="/arrays-home">Arrays</Nav.Link>
            <Nav.Link as={Link} to="/halda-home">Halda</Nav.Link>
            <Nav.Link as={Link} to="/osta-kinkekaart">Kinkekaart</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/seaded">Seaded</Nav.Link>
            <Nav.Link as={Link} to="/kalkulaator">Kalkulaator</Nav.Link>
            <Nav.Link as={Link} to="/lisa-toode">Lisa toode</Nav.Link>
            <Nav.Link as={Link} to="/email">Saada email</Nav.Link>
            <Nav.Link as={Link} to="/api-home">API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;