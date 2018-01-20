import React from 'react';
import { connect } from 'react-redux';
import Group from './Group';

class GroupList extends React.Component {
  render() {
    return (
      <div className="row">
        <Group />
        <Group />
        <Group />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(GroupList);
