import React from 'react';
import { connect } from 'react-redux';
import NewGroupForm from '../components/LFG/NewGroupForm';
import GroupList from '../components/LFG/GroupList';
import { fetchGroups, createGroup } from '../actions/index.js';

class GroupContainer extends React.Component {
  state = {
    showForm: false
  };

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.props.fetchGroups();
    } else {
      this.props.history.push('/login');
    }
  };

  toggleForm = () => {
    this.setState({ showForm: true });
  };
  toggleList = () => {
    this.setState({ showForm: false });
  };

  createGroup = something => {
    this.props.createGroup(something);
    this.setState({ showForm: false });
  };
  render() {
    // console.log(this.props.groupsList);
    return (
      <div className="blue-grey lighten-2" style={{ height: '100%' }}>
        <br />
        <div className="row">
          <ul className="col s12">
            <div className="col s2"> </div>
            <li className="col s4">
              <button
                style={{ width: '100%' }}
                className="blue-grey-text text-darken-2 waves-effect waves-light btn-flat yellow darken-2"
                onClick={() => this.toggleForm()}
              >
                New
              </button>
            </li>

            <li className="col s4">
              <button
                style={{ width: '100%' }}
                className="blue-grey-text text-darken-2 waves-effect waves-light btn-flat yellow darken-2"
                onClick={() => this.toggleList()}
              >
                List
              </button>
            </li>
            <div className="col s2" />
          </ul>
        </div>

        {this.state.showForm ? (
          <div className="row">
            <div className="col s1" />
            <div className="col s10">
              <NewGroupForm createGroup={this.createGroup} />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col s1" />
            <div className="col s10">
              {this.props.groupsList.groups ? (
                <div className="progress">
                  <div className="indeterminate" />
                </div>
              ) : (
                <GroupList groups={this.props.groupsList} />
              )}
            </div>
            <div className="col s1" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { fetchGroups, createGroup })(
  GroupContainer
);
