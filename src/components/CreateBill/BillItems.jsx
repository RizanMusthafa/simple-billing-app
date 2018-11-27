import React from 'react';
import BillItem from './BillItem';

const BillItems = ({ items }) => {
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
        {items.map(item => (
          <BillItem key={item.itemName} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-secondary text-light font-weight-bold">
          <td colSpan="2">Sub Total</td>
          <td>6</td>
          <td>6000</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default BillItems;
