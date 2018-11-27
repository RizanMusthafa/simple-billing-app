import React from 'react';

const BillItem = ({ item: { itemName, unitPrice, qty, total } }) => {
  return (
    <tr>
      <td>{itemName}</td>
      <td>{unitPrice}</td>
      <td>{qty}</td>
      <td>{total}</td>
    </tr>
  );
};

export default BillItem;
