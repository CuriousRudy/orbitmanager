import React from 'react';
import { connect } from 'react-redux';
import { setPlayerInformation } from '../actions/index.js';

class DashContainer extends React.Component {
  render() {
    return (
      <div className="white">
        <h3>DashContainer</h3>
        <button onClick={() => console.log('clicked')}>Set State</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(DashContainer);
