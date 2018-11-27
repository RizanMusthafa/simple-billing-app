import React from 'react';
import BillItem from './BillItem';

const BillItems = ({ items, sum: { qtys, subTotal } }) => {
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
          <BillItem key={item.itemName + item.unitPrice} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-secondary text-light font-weight-bold">
          <td colSpan="2">Sub Total</td>
          <td>{qtys}</td>
          <td>{subTotal}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default BillItems;
