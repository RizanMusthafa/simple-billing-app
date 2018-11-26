import React from 'react';
import CreateBill from './components/CreateBill';

class App extends React.Component {
  render() {
    return (
      <div className="w3-container">
        <div className="w3-row">
          <div className="w3-col s6">
            <CreateBill />
          </div>

          <div className="w3-col s6">
            <h3>Bills</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
