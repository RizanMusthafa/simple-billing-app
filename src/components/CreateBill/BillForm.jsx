import React from 'react';

const BillForm = props => {
  return (
    <form className="row bg-light">
      <div className="col-sm-6">
        <input
          name="item"
          placeholder="item name"
          type="text"
          className="form-control form-control-sm"
        />
      </div>
      <div className="col-sm-3">
        <input
          name="qty"
          placeholder="Qty"
          type="number"
          min="1"
          className="form-control form-control-sm"
        />
      </div>
      <div className="col-sm-3">
        <button type="submit" className="btn btn-sm btn-block">
          Add
        </button>
      </div>
    </form>
  );
};

export default BillForm;
