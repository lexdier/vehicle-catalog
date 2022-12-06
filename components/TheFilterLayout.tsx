import React, { useState } from 'react';
import TheSidebar from '../components/TheSidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheSubNavbar from '../components/TheSubNavbar';

export default function TheFilterLayout({ children }: any) {
  const [showSidebar, setShowSidebar] = useState(true);
  const showAlert = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Container>
      <Row>
        <TheSubNavbar onFilter={showAlert} />
      </Row>
      <Row>
        <Col lg="auto">
          {showSidebar && (<TheSidebar />)}
        </Col>
        <Col lg className="d-flex justify-content-center align-items-center">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
