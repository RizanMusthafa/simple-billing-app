import React from 'react';

const BillItems = props => {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test Item</td>
          <td>2</td>
          <td>1000</td>
          <td>2000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BillItems;
