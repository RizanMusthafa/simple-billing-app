import React from 'react';
import CreateBill from './components/CreateBill';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <CreateBill />
          </div>

          <div className="col-sm-6">
            <h3>Bills</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
