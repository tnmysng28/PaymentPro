import React from "react";

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Accounts() {
  return (
    <>
      <Container fluid>
      
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h2">Accounts</Card.Title>
               
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Account Number</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>23843723498223</td>
                      <td>Domestic</td>
                      <td><a href="">View Transactions</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>23843723498223</td>
                      <td>Domestic</td>
                      <td><a href="">View Transactions</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>23843723498223</td>
                      <td>Domestic</td>
                      <td><a href="">View Transactions</a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>23843723498223</td>
                      <td>Domestic</td>
                      <td><a href="">View Transactions</a></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>23843723498223</td>
                      <td>International</td>
                      <td><a href="">View Transactions</a></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>23843723498223</td>
                      <td>International</td>
                      <td><a href="">View Transactions</a></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
      </Container>
    </>
  );
}

export default Accounts;
