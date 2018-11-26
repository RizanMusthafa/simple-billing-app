import React from 'react';

const BillForm = props => {
  return (
    <form className=" w3-grey">
      <div className="w3-col s6">
        <input
          name="item"
          placeholder="item name"
          type="text"
          className="w3-input w3-sm w3-border"
        />
      </div>
      <div className="w3-col s3">
        <input
          name="qty"
          placeholder="Qty"
          type="number"
          min="1"
          className="w3-input w3-border"
        />
      </div>
      <div className="w3-col s3">
        <button className="w3-button w3-green w3-block">Add</button>
      </div>
    </form>
  );
};

export default BillForm;
