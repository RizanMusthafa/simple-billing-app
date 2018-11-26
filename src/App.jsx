import React from 'react';
import CreateBill from './components/CreateBill';
import BillList from './components/BillList';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <CreateBill />
          </div>

          <div className="col-sm-6">
            <BillList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
