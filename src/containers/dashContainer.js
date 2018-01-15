import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters } from '../actions/index.js';

// import { withRouter } from 'react-router-dom';

class DashContainer extends React.Component {
  render() {
    const token = localStorage.getItem('token');
    console.log('dash mounted', this.props);
    return (
      <div className="blue-grey lighten-2">
        <h3>DashContainer</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getPlayerCharacters })(DashContainer);
