import React from 'react';
import BillForm from './BillForm';
import BillItems from './BillItems';

class CreateBill extends React.Component {
  state = {
    bill: []
  };
  render() {
    return (
      <React.Fragment>
        <h1>Create Bill</h1>
        <hr />
        <BillForm />
        <hr />
        <BillItems items={this.state.bill} />
        <hr />
        <div className="text-right">
          <button type="button" className="btn btn-sm">
            Checkout
          </button>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default CreateBill;
