import React from 'react';
import Bill from './Bill';

const Bills = props => {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>Bill No</th>
          <th>Payment Method</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
        <Bill />
      </tbody>
      <tfoot>
        <tr className="bg-secondary text-light font-weight-bold">
          <td>Sub Total</td>
          <td>Total Bills 6</td>
          <td>8000</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Bills;
