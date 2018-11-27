import React from 'react';
import BillForm from './BillForm';
import BillItems from './BillItems';

class CreateBill extends React.Component {
  state = {
    formData: {
      itemName: '',
      unitPrice: 0,
      qty: 1,
      total: 0
    },
    bill: []
  };

  addItem = e => {
    console.log(e);
  };

  fieldChange = e => {
    const temp = { ...this.state.formData };
    const field = e.target.name;
    let val = e.target.value;
    if (field === 'total') return;
    val = val.trim();
    temp[field] = val;
    if (field === 'qty' || field === 'unitPrice') {
      val = parseFloat(val);
      if (isNaN(val)) val = 0;
      temp[field] = val;
      temp.total = temp.qty * temp.unitPrice;
    }
    this.setState({
      formData: temp
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Create Bill</h1>
        <hr />
        <BillForm
          formData={this.state.formData}
          handleSubmit={this.addItem}
          handleFieldChange={this.fieldChange}
        />
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
