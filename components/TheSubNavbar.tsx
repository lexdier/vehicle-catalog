import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function TheSubNavbar({ onFilter }: any) {
  return (
    <Navbar className="mt-5 mb-3" variant="light" expand="lg">
      <Col lg="2">
        <Button onClick={() => onFilter()}>
          Filtros
        </Button>
      </Col>
      <Col lg="9">
        <span>
          Comprar
        </span>
      </Col>
      <Col lg="1">
        <Nav variant="danger">
          <NavDropdown title="Filter" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
    </Navbar>
  );
}
