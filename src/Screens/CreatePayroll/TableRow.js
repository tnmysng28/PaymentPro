import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function TableRow({ index, data, onSave, onEdit }) {
  const [transactionData, setTransactionData] = useState(data);

  const handleInputChange = (field, value) => {
    const updatedRow = { ...transactionData, [field]: value };
    setTransactionData(updatedRow);
  };

 
  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          value={transactionData.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          disabled={!transactionData.editable}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          value={transactionData.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          disabled={!transactionData.editable}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          value={transactionData.accountNo}
          onChange={(e) => handleInputChange('accountNo', e.target.value)}
          disabled={!transactionData.editable}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          value={transactionData.bankCode}
          onChange={(e) => handleInputChange('bankCode', e.target.value)}
          disabled={!transactionData.editable}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          value={transactionData.amount}
          onChange={(e) => handleInputChange('amount', e.target.value)}
          disabled={!transactionData.editable}
        />
      </td>
      <td>
        {transactionData.editable ? (
          <div>
            <Button
              variant="success"
              className='btn-fill'
              size='sm'
              onClick={() => {
                onSave(index, transactionData);
              }}
            >
              Save
            </Button>
          </div>
        ) : (
          <Button variant="primary" size='sm' className='btn-fill' onClick={() => onEdit(index)}>
            Edit
          </Button>
        )}
      </td>
    </tr>
  );
}



export default TableRow;

