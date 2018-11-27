import React from 'react';

const BillForm = ({
  handleSubmit,
  handleFieldChange,
  formData: { itemName, qty, unitPrice, total }
}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      className="row"
    >
      <div className="col-sm-4">
        <label htmlFor="item">Item Name</label>
        <input
          name="itemName"
          placeholder="item name"
          type="text"
          className="form-control form-control-sm"
          value={itemName}
          onChange={handleFieldChange}
        />
      </div>
      <div className="col-sm-2">
        <label>Unit Price</label>
        <input
          name="unitPrice"
          placeholder="Price"
          type="number"
          min="0"
          // disabled={true}
          className="form-control form-control-sm"
          value={unitPrice}
          onChange={handleFieldChange}
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
          value={qty}
          onChange={handleFieldChange}
        />
      </div>
      <div className="col-sm-2">
        <label>Total</label>
        <input
          name="total"
          type="number"
          placeholder="Total"
          min="0"
          disabled={true}
          className="form-control form-control-sm"
          value={total}
          onChange={handleFieldChange}
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
