import React from 'react';

const BillItem = ({ item: { itemName, unitPrice, quntity, total } }) => {
  return (
    <tr>
      <td>{itemName}</td>
      <td>{unitPrice}</td>
      <td>{quntity}</td>
      <td>{total}</td>
    </tr>
  );
};

export default BillItem;
