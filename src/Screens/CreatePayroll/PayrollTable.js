import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import TableRow from './TableRow';
import NotificationAlert from "react-notification-alert";

// import Papa from 'papaparse';

function PayrollTable({ batchReferenceNumber, numTransactions, csvFile }) {
  const [transactions, setTransactions] = useState([]);
  const notificationAlertRef = React.useRef(null);
  const notify = () => {

    const type = "success";
    var options = {};
    options = {
      place: "tr",
      message: (
        <div>
          <div>
            Added a Transaction Row. Please fill in its details.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  useEffect(() => {
    const transactionArray = Array.from({ length: 1 }, () => ({
      firstName: '',
      accountNo: '',
      bankName: '',
      bankCode: '',
      amount: '',
      transactionId: '',
      editable: true,
    }));

    setTransactions(transactionArray);
  }, []);


  const handleCSVRendering = (file) => {
    // ... your CSV parsing code ...
  };

  useEffect(() => {
    if (csvFile) {
      handleCSVRendering(csvFile);
      return;
    }
    // ... your initialRows code ...
  }, []);

  const handleRowSave = (index, data) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index] = data;
    updatedTransactions[index].editable = false;
    setTransactions(updatedTransactions);
  };

  const handleRowEdit = (index) => {
    // Enable editing for the selected row
    const updatedTransactions = [...transactions];
    updatedTransactions[index].editable = true;
    setTransactions(updatedTransactions);
  };

  const handleRowDoneEditing = (index) => {
    // Disable editing for the selected row
    const updatedTransactions = [...transactions];
    updatedTransactions[index].editable = false;
    setTransactions(updatedTransactions);
  };


  const handleAddTransaction = () => {
    const newTransaction = {
      firstName: '',
      lastName: '',
      accountNo: '',
      bankCode: '',
      amount: '',
      editable: true,
    };

    setTransactions([...transactions, newTransaction]);
  };

  return (
    <>
      <div className='rna-container'>
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className='table-area'>
        <h3>Payment Details</h3>

        <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          <Table bordered >
            <thead style={{
              position: 'sticky',
              top: 0,
              backgroundColor: '#fff',
              zIndex: 1,
            }}>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Account Number</th>
                <th>Bank Code</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((row, index) => (
                <TableRow
                  key={index}
                  index={index}
                  data={row}
                  onSave={handleRowSave}
                  onEdit={handleRowEdit}
                  onDoneEditing={handleRowDoneEditing}
                />
              ))}
            </tbody>
          </Table>
        </div>
        
        <Button block variant="primary" className='btn-fill' style={{ marginTop: '20px'}}
        onClick={() => {
          handleAddTransaction();
          notify();
        }}>
          Add Transaction
        </Button>

      </div>
    </>
  );
}

export default PayrollTable;
