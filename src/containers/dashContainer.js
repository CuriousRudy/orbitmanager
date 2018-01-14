import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters } from '../actions/index.js';

// import { withRouter } from 'react-router-dom';

class DashContainer extends React.Component {
  render() {
    const token = localStorage.getItem('token');
    console.log('dash mounted', this.props);
    return (
      <div className="white">
        <h3>DashContainer</h3>
        <button
        // onClick={() => {
        //   this.props.getPlayerCharacters(this.props.current_user);
        // }}
        >
          Set State
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getPlayerCharacters })(DashContainer);
