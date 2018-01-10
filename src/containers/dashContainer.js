import React from 'react';
import { connect } from 'react-redux';

class DashContainer extends React.Component {
  render() {
    return (
      <div className="white">
        <h1>This is the DashContainer</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(DashContainer);
