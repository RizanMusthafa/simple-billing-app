import React from 'react';
import BillForm from './BillForm';
import BillItems from './BillItems';

class CreateBill extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Create Bill</h1>
        <hr />
        <BillForm />
        <hr />
        <BillItems />
      </React.Fragment>
    );
  }
}

export default CreateBill;
