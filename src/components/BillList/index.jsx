import React from 'react';
import Bills from './Bills';

class BillList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Bill List</h1>
        <hr />
        <Bills />
      </React.Fragment>
    );
  }
}

export default BillList;
