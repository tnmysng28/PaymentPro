import React from 'react'
import { useState } from 'react';
import {
    Card,
    Table,
    Container,
    Row,
    Col,
    Form,
} from "react-bootstrap";


function BatchForm() {
    const [formData, setFormData] = useState({
        debitAccount: '',
        transactionDate: '',
        numTransactions: 1,
        total: 0,
      });
    
      const handleInputChange = (fieldName, value) => {
        console.log(fieldName + " " + value);
        setFormData({
          ...formData,
          [fieldName]: value,
        });
      };
    
      return (
        <>
        <Container fluid>
          <Row>
            <Col md={6}>
              <Form.Group as={Row} controlId="debitAccount">
                <Form.Label column md={4}>Debit Account</Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    value={formData.debitAccount}
                    onChange={(e) => handleInputChange('debitAccount', e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group as={Row} controlId="transactionDate">
                <Form.Label column md={4}> Date</Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="date"
                    value={formData.transactionDate}
                    onChange={(e) => handleInputChange('transactionDate', e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
    
          <Row>
            <Col md={6}>
              <Form.Group as={Row} controlId="numTransactions">
                <Form.Label column md={4}>Number of Transactions</Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="number"
                    value={formData.numTransactions}
                    disabled
                    onChange={(e) => handleInputChange('numTransactions', parseInt(e.target.value))}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group as={Row} controlId="total">
                <Form.Label column md={4}>Total</Form.Label>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    value={formData.total}
                    disabled
                    onChange={(e) => handleInputChange('total', e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          </Container>
            
          </>
  );
}

export default BatchForm