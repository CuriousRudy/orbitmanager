import React from 'react';
import { connect } from 'react-redux';
import NewGroupForm from '../components/LFG/NewGroupForm';
import GroupList from '../components/LFG/GroupList';

class GroupContainer extends React.Component {
  state = {
    showForm: false
  };

  toggleForm = () => {
    this.setState({ showForm: true });
  };
  toggleList = () => {
    this.setState({ showForm: false });
  };
  render() {
    return (
      <div>
        <div className="row">
          <ul className="col s12">
            <div className="col s2"> </div>
            <li className="col s4">
              <button
                style={{ width: '100%' }}
                className="waves-effect waves-teal btn-flat"
                onClick={() => this.toggleForm()}
              >
                New
              </button>
            </li>

            <li className="col s4">
              <button
                style={{ width: '100%' }}
                className="waves-effect waves-teal btn-flat"
                onClick={() => this.toggleList()}
              >
                List
              </button>
            </li>
            <div className="col s2" />
          </ul>
        </div>

        {this.state.showForm ? (
          <div className="container">
            <NewGroupForm />
          </div>
        ) : (
          <div className="row">
            <div className="col s1" />
            <div className="col s10">
              <GroupList />
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

export default connect(mapStateToProps)(GroupContainer);
