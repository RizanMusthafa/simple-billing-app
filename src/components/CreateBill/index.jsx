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
    billSummery: {
      qtys: 0,
      subTotal: 0
    },
    bill: []
  };

  addItem = e => {
    const newBill = [...this.state.bill];
    const newItem = { ...this.state.formData };
    const duplicateItem = newBill.find(
      item => item.itemName === newItem.itemName
    );
    if (duplicateItem) {
      const i = newBill.indexOf(duplicateItem);
      duplicateItem.qty += newItem.qty;
      duplicateItem.total += newItem.total;
      newBill.splice(i, 1, duplicateItem);
    } else {
      newBill.push(newItem);
    }
    const billSummery = {
      qtys: this.state.billSummery.qtys + newItem.qty,
      subTotal: this.state.billSummery.subTotal + newItem.total
    };
    const emptyFormData = { itemName: '', unitPrice: 0, qty: 1, total: 0 };
    this.setState({ bill: newBill, formData: emptyFormData, billSummery });
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
        <BillItems sum={this.state.billSummery} items={this.state.bill} />
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
