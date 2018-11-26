import React from 'react';

const BillForm = props => {
  return (
    <form className="row">
      <div className="col-sm-4">
        <label htmlFor="item">Item Name</label>
        <input
          name="item"
          placeholder="item name"
          type="text"
          className="form-control form-control-sm"
        />
      </div>
      <div className="col-sm-2">
        <label>Unit Price</label>
        <input
          name="unitPrice"
          placeholder="Price"
          type="number"
          min="0"
          disabled={true}
          className="form-control form-control-sm"
        />
      </div>
      <div className="col-sm-2">
        <label htmlFor="qty">Quantity</label>
        <input
          name="qty"
          placeholder="Qty"
          type="number"
          min="1"
          className="form-control form-control-sm"
        />
      </div>
      <div className="col-sm-2">
        <label>Total</label>
        <input
          name="totalPrice"
          type="number"
          placeholder="Total"
          min="0"
          disabled={true}
          className="form-control form-control-sm"
        />
      </div>
      <div className="col-sm-2">
        <label>Add</label>
        <button type="submit" className="btn btn-sm btn-block">
          Add
        </button>
      </div>
    </form>
  );
};

export default BillForm;
