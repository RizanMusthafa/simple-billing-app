import React from 'react';
import BillItem from './BillItem';

const BillItems = props => {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Unit Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <BillItem />
        <BillItem />
        <BillItem />
      </tbody>
    </table>
  );
};

export default BillItems;
