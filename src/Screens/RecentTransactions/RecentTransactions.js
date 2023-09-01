import React from 'react'
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
  } from "react-bootstrap";
function RecentTransactions() {
  return (
    <Card className="card-plain table-plain-bg">
    <Card.Header>
      <Card.Title as="h2">Recent Transactions</Card.Title>
     
    </Card.Header>


    <Card.Body className="table-full-width table-responsive px-0">
      <Table className="table-hover">
        <thead>
          <tr>
            <th className="border-0">Id</th>
            <th className="border-0">Batch Ref. No</th>
            <th className="border-0">Date</th>
            <th className="border-0">Payroll Type</th>
            <th className="border-0">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>23843723498223</td>
            <td>01/12/2023</td>
            <td>Domestic</td>
            <td><a href="">View Batch</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>23843723498223</td>
            <td>01/12/2023</td>
            <td>Domestic</td>
            <td><a href="">View Batch</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>23843723498223</td>
            <td>01/12/2023</td>
            <td>Domestic</td>
            <td><a href="">View Batch</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td>23843723498223</td>
            <td>01/12/2023</td>
            <td>Domestic</td>
            <td><a href="">View Batch</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td>23843723498223</td>
            <td>01/12/2023</td>
            <td>Domestic</td>
            <td><a href="">View Batch</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td>23843723498223</td>
            <td>01/12/2023</td>
            <td>Domestic</td>
            <td><a href="">View Batch</a></td>
          </tr>
        </tbody>
      </Table>
    </Card.Body>
  </Card>
  )
}

export default RecentTransactions