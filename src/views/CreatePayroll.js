import BatchForm from "Screens/CreatePayroll/BatchForm";
import PayrollTable from "Screens/CreatePayroll/PayrollTable";
import React from "react";
import PayrollForm from "Screens/CreatePayroll/PayrollForm";
// react-bootstrap components


import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";


function CreatePayroll() {
  const getTransactionArray = (arr) => {
    return arr;
  }
  const handleBatchSubmit = () => {
      const transactions = [];

      const getData = getBatchFormData();

  }
  return (
    <>
      {/* <Row>
        <Col>
          <h3>Batch Instruction Form</h3>
          <BatchForm/>
        </Col>
      </Row>
      <Row>
        <Col><PayrollTable/></Col>
      </Row>
      <Row>
        
        <Button variant="success" className="btn-fill" 
        style={{ position: 'absolute', bottom: '60px', right: '10px' }}
        onClick={handleBatchSubmit}
        >Initiate Payment</Button>

      </Row> */}
      <PayrollForm/>

    </>
  );
}

export default CreatePayroll;
