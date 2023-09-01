import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {
    Card,
    Table,
    Container,
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";
import TableRow from './TableRow';
import NotificationAlert from "react-notification-alert";
import Papa from 'papaparse';



let counter = 0;
let isImported = false;
let isBatchInitiated = false;
function PayrollForm() {
    const fileInputRef = useRef(null);

  const handleImportClick = () => {
    // Programmatically trigger the click event on the file input
    if(counter > 0){
        notify(3);
        return;
    }
    isImported = true;
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Process the selected file here
    if(selectedFile){
        handleCSVRendering(selectedFile);
    }
  };

    const [formData, setFormData] = useState({
        debitAccount: '',
        transactionDate: '',
        numTransactions: 0,
        total: '0',
    });

    const [transactions, setTransactions] = useState([]);

    // alert feature 
    const notificationAlertRef = React.useRef(null);
    const notify = (flag) => {

        const options = [
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Added a Transaction Row. Please fill in its details.
                        </div>
                    </div>
                ),
                type: "success",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 1,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Please complete all the fields before moving forward
                        </div>
                    </div>
                ),
                type: "danger",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 2,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Populating Tables....
                        </div>
                    </div>
                ),
                type: "warning",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 3,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Importing a CSV is not possible if transaction already exist. Please refresh Page to proceed with CSV import.
                        </div>
                    </div>
                ),
                type: "danger",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 3,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            You cannot add transactions if transactions are imported. To manually add the transactions, please refresh the page.
                        </div>
                    </div>
                ),
                type: "danger",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 3,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Atleast one transaction should be present in a Batch to initiate payment.
                        </div>
                    </div>
                ),
                type: "danger",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 3,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Batch Initiated!
                        </div>
                    </div>
                ),
                type: "success",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 1,
            },
            {
                place: "tr",
                message: (
                    <div>
                        <div>
                            Batch Already Initiated.
                        </div>
                    </div>
                ),
                type: "warning",
                icon: "nc-icon nc-bell-55",
                autoDismiss: 3,
            }
        ];

        const res = options[flag];
        notificationAlertRef.current.notificationAlert(res);
    };

    const handleInputChange = (fieldName, value) => {

        setFormData({
            ...formData,
            [fieldName]: value,
            ["numTransactions"]: counter,
        });
    };
    useEffect(() => {
        const transactionArray = Array.from({ length: 0 }, () => ({
            firstName: '',
            lastName: '',
            accountNo: '',
            bankCode: '',
            amount: '',
            editable: false,
        }));

        setTransactions(transactionArray);
    }, []);


    const handleCSVRendering = (file) => {
        // ... your CSV parsing code ...
        const reader = new FileReader();
        reader.onload = (event) => {
            const csvData = event.target.result;


            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (parsedData) => {
                    if (parsedData.data.length > 0) {
                        const newArr = parsedData.data;
                        for(const obj of parsedData.data){
                            obj.editable = false;
                        }
                        let totalSum = 0;

                        for (const transaction of newArr) {
                            totalSum += (transaction.amount == "") ? 0 : parseFloat(transaction.amount);
                        }
                        counter = newArr.length;
                        handleInputChange('total', totalSum.toString());

                        setTransactions(newArr);
                        notify(2);
                    }
                }
            });
        }
        reader.readAsText(file);
    };

    const handleRowSave = (index, data) => {


        const updatedTransactions = [...transactions];
        updatedTransactions[index] = data;
        updatedTransactions[index].editable = false;
        let totalSum = 0;

        for (const transaction of updatedTransactions) {
            totalSum += (transaction.amount == "") ? 0 : parseFloat(transaction.amount);
        }
        setTransactions(updatedTransactions);
        handleInputChange('total', totalSum.toString());
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

        if(isImported){
            notify(4);
            return;
        }
        
        const allFieldsFilled = transactions.every((obj) => {
            return (obj.firstName && obj.lastName && obj.accountNo && obj.bankCode && obj.amount && (obj.editable === false))
        });
        if (!allFieldsFilled) {
            notify(1);
            return;
        }
        notify(0);

        counter++;
        const newTransaction = {
            firstName: '',
            lastName: '',
            accountNo: '',
            bankCode: '',
            amount: '',
            editable: false,
        };
        handleInputChange('numTransactions', counter);
        setTransactions([...transactions, newTransaction]);
    };

    const handleBatchSubmit = () => {
        if(transactions.length === 0){
            notify(5);
            return;
        }
        if(isBatchInitiated){
            notify(7);
            return;
        }
        const allFieldsFilled = transactions.every(obj => (obj.firstName && obj.lastName && obj.accountNo && obj.bankCode && obj.amount && (obj.editable === false)));
        if (!allFieldsFilled) {
            notify(1);
            return;
        }
        if (formData.debitAccount == '' || formData.transactionDate == '') {
            notify(1);
            return;
        }
        const batchData = {
            "accountNo": formData.debitAccount,
            "transactionDate": formData.transactionDate,
            "transactions": transactions.map(({ firstName, lastName, accountNo, bankCode, amount }) => ({
                firstName,
                lastName,
                accountNo,
                bankCode,
                amount
            }))
        }
        isBatchInitiated = true;
        notify(6);
        console.log(batchData);
    }

    return (
        <Container fluid>
            <h3>Batch Instruction Form</h3>
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

            {/* Table starts from here */}
            <div className='rna-container'>
                <NotificationAlert ref={notificationAlertRef} />
            </div>


            <div className='table-area'>
                <h3>Payment Details</h3>

                {/* Import Button  */}
                <div className="d-flex justify-content-end mb-3">
                    <Button
                        variant="success"
                        className="btn-fill"
                        size='sm'
                        onClick={handleImportClick}
                    >
                        <input
                            type="file"
                            accept=".csv"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        Import CSV File
                    </Button>
                </div>

                {/* Table area  */}
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
                            {transactions.map((row, index) => {return(
                                <TableRow
                                    key={index}
                                    index={index}
                                    data={row}
                                    onSave={handleRowSave}
                                    onEdit={handleRowEdit}
                                    onDoneEditing={handleRowDoneEditing}
                                />
                            )})}
                        </tbody>
                    </Table>
                </div>

                {/* Add Transaction Button */}
                <Button block variant="primary" className='btn-fill' style={{ marginTop: '20px' }}
                    onClick={() => {
                        handleAddTransaction();
                    }}>
                    Add Transaction
                </Button>

                {/* Initiate Button  */}
                <Button variant="success" className="btn-fill"
                    style={{ position: 'absolute', bottom: '60px', right: '30px' }}
                    onClick={handleBatchSubmit}
                >Initiate Payment</Button>


            </div>
        </Container>
    );
}

export default PayrollForm