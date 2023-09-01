import React, { useEffect, useState } from 'react';
import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import axios from 'axios';


const Manage = () => {
  const data = [
    { batchId: '123', date: '2023-08-17', 
    account: {
      accountNo: '131311'
    },
    amount: '2323232',
    status: '1'

  },
  { batchId: '11123', date: '2023-08-17', 
  account: {
    accountNo: '131311'
  },
  amount: '2323232',
  status: '1'

},
{ batchId: '123', date: '2023-08-17', 
account: {
  accountNo: '131311'
},
amount: '2323232',
status: '1'

},
{ batchId: '123', date: '2023-08-17', 
account: {
  accountNo: '131311'
},
amount: '2323232',
status: '1'

},
{ batchId: '123', date: '2023-08-17', 
account: {
  accountNo: '131311'
},
amount: '2323232',
status: '1'

},
{ batchId: '123', date: '2023-08-17', 
account: {
  accountNo: '131311'
},
amount: '2323232',
status: '1'

},
{ batchId: '123', date: '2023-08-17', 
account: {
  accountNo: '131311'
},
amount: '2323232',
status: '1'

}
    // Add more data entries...
  ];

  // const data = data;
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBatchData, setFilteredBatchData] = useState(data);

  const[batches,setBatches]=useState([]);
  useEffect(() => {
    console.log("Sds");
    console.log(data);
    // axios.get('http://localhost:8080/batch/all')
    //  .then(response=>{
       setFilteredBatchData(data);
    //    console.log(response.data[8]);
    //    console.log(response.data[8].account.id);
    //  })
    //  .catch(error=>{
    //    console.error('error occured',error);
    //  });
   },[])
  // ...

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedTransaction(null);
    setShowPopup(false);
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleSetFilteredBatchData = () => {

    setCurrentPage(1);
    const arr = batches.filter((batch) => {
      return batch.batchId.toString().startsWith(searchTerm);
    });

    
    setFilteredBatchData(arr);
  }

  useEffect(() => {
    handleSetFilteredBatchData();
  }, [searchTerm]);
  const StatusDot = ({ status }) => {
    let dotColor = '';
    switch (status) {
      case 1:
        dotColor = 'green';
        break;
      case 2:
        dotColor = 'yellow';
        break;

      case 3:
        dotColor = 'red';
        break;
      default:
        dotColor = 'orange';
    }
    return <div className={`status-dot ${dotColor}`}></div>
  }

  return (
    <Container fluid>
      <Row>
       

        <Col >
          <h3>Payrolls</h3>
          <Container >
            <Row >
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Search by Batch Number"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Col>
            </Row>

            <Table striped bordered>
              <thead>
                <tr>
                  <th>Batch Reference No.</th>
                  <th>Date</th>
                  <th>Debit Account</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>

                {filteredBatchData
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    (currentPage - 1) * itemsPerPage + itemsPerPage
                  )
                  .map((batch) => (
                    <tr key={batch.batchId}>
                      <td>{batch.batchId}</td>
                      <td>{batch.date}</td>
                      <td>{batch.account.accountNo}</td>
                      <td>{batch.amount}</td>
                      <td>
                        {(batch.status === 1 ? 'Approved' : batch.status === 2 ? 'Pending' : batch.status === 3 ? 'Rejected' : 'Processing')}
                        <StatusDot status={batch.status} />
                      </td>
                      <td>
                        <Button variant="link" size='sm' className="btn-primary" onClick={() => handleEditClick(batch)}>
                               Preview
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>

        
            <nav>
              <ul className="pagination justify-content-center">
                <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                  <Button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                  </Button>
                </li>
                {Array.from({ length: Math.ceil(batches.length / itemsPerPage) }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item${currentPage === index + 1 ? ' active' : ''}`}
                  >
                    <Button className="page-link" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </Button>
                  </li>
                ))}
                <li
                  className={`page-item${
                    currentPage === Math.ceil(batches.length / itemsPerPage) ? ' disabled' : ''
                  }`}
                >
                  <Button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </Button>
                </li>
              </ul>
            </nav>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Manage;
