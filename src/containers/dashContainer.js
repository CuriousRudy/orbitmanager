import React from 'react';
import { connect } from 'react-redux';

class dashContainer extends React.Component {
  render() {
    return (
      <div className="white">
        <h1>This is the dashContainer</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(dashContainer);
