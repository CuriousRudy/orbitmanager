import React from 'react';
import { connect } from 'react-redux';
import Group from './Group';
// import { fetchGroups } from '../../actions/index.js';

class GroupList extends React.Component {
  state = {
    groups: []
  };

  // componentDidMount = () => {
  //   if (this.props.groups.length > 0) {
  //     this.setState({ groups: this.props.groups });
  //   }
  // };
  // shouldComponentUpdate = nextProps => {
  //   return nextProps.groups === this.props.groupsList;
  // };
  render() {
    console.log(this.props.groupsList);
    const groups = this.props.groupsList.map((group, i) => (
      <Group key={i} group={group} />
    ));
    return <div className="row">{groups}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(GroupList);
