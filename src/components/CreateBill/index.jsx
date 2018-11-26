import React from 'react';
import BillForm from './BillForm';

class CreateBill extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Create Bill</h1>
        <hr />
        <BillForm />
      </React.Fragment>
    );
  }
}

export default CreateBill;
