import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NeedHelp() {
  return (
    <Container >
      <Row >
        <Col >
          <h3>Corporate, Commercial and Institutional Banking Clients</h3>
        </Col>
      </Row>
      <Row >
        <Col >
          <h4>Hours of Operation:</h4>
          <p>Mon-Sat 9.00am to 6.00pm</p>
          <p>(except for 02nd and 04th Sat, Sun & Bank holidays)</p>
        </Col>
      </Row>
      <Row >
        <Col>
          <h4>Call Us:</h4>
          <p>1800 266 2888</p>
          <p>1800 103 2888</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Email:</h4>
          <p>Straight2bank.in@sc.com</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NeedHelp;
