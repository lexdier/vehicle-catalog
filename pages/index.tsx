import CarItem from '../components/CarItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import TheFilterLayout from '../components/TheFilterLayout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

axios.defaults.baseURL = 'https://api.merkaly.io';
axios.defaults.headers.common.identity = 'elcloset';

function showLoading(loading: boolean) {
  return (
    loading && (<Spinner animation="border" role="status">
      <span className="visually-hidden">
        Loading...
      </span>
    </Spinner>)
  );
}

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    setLoading(true);
    axios.get('/search/inventory_products')
      .then(function ({ data }) {
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
    <TheFilterLayout>
      <Row>
        {users.map((user: any) =>
          <Col lg="4" key={user.id}>
            <CarItem />
          </Col>,
        )}
      </Row>
      <Row>
        <Col>
          {showLoading(loading)}
        </Col>
      </Row>
    </TheFilterLayout>
  );
}
