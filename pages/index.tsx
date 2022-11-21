import CarItem from '../components/CarItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import TheSidebar from '../components/TheSidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
axios.defaults.baseURL = 'https://api.merkaly.io';
axios.defaults.headers.common.identity = 'elcloset';

function showLoading(loading: boolean) {
  return (
    loading && (<Spinner animation="border" role="status">
      <span className="visually-hidden">
        Loading...</span>
    </Spinner>)
  );
}

export default function () {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    setLoading(true);
    axios.get('/search/inventory_products')
      .then(function ({ data }) {
        console.log(data.hits);
        setUsers(data.hits);
      })
      .catch(function (e) {
        // handle error
        console.log(e);
      })
      .finally(function () {
        setLoading(false);
      });
  };

  return (
    <>
      {showLoading(loading)}
      <Container>
        <Row>
          <Col lg="4">
            <TheSidebar />
          </Col>
          <Col lg="8">
            <Row>
              {users.map((user) =>
                <Col lg="4">
                  <CarItem key={user.id} />
                </Col>,
              )}
            </Row>
          </Col>
        </Row>
      </Container>

    </>

  );
}
