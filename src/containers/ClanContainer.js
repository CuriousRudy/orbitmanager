import React from 'react';
import { connect } from 'react-redux';
import { getAllClans, createClan } from '../actions/index.js';
import ClanLister from '../components/Clan/ClanLister';
import { Collapsible } from 'react-materialize';
// import { Switch, Route } from 'react-router';

class ClanContainer extends React.Component {
  state = {
    loading: true,
    search: '',
    showForm: false,
    name: '',
    tagline: ''
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    if (this.state.loading) {
      this.props.getAllClans();
    } else {
      this.setState({
        loading: false
      });
    }
  };

  toggleForm = () => {
    this.setState({
      showForm: false
    });
  };
  toggleList = () => {
    this.setState({
      showForm: true
    });
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.allClans !== this.props.allClans) {
      this.setState({ loading: false });
    }
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  updateForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log('container is mounting', this.state);
    const clanList = (
      <div id="test1" className="col s12 ">
        <div className="row">
          <div className="col s4" />
          <div className="col s8">
            <div className="row">
              <div className="input-field col s6">
                {/* <i className="material-icons prefix">search</i> */}
                <input
                  onChange={e => this.handleChange(e)}
                  value={this.state.search}
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  placeholder="Search for a clan by name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col s12 ">
            <Collapsible popout accordion>
              {this.props.allClans.allClans ? (
                this.props.allClans.allClans
                  .filter(clan => {
                    return clan.name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase());
                  })
                  .map((clan, i) => {
                    return <ClanLister clan={clan} key={i} />;
                  })
              ) : (
                <div className="progress">
                  <div className="indeterminate" />
                </div>
              )}
            </Collapsible>
          </div>
        </div>
      </div>
    );
    const newClanForm = (
      <div id="test2" className="container">
        <div className="row" />
        <h4 style={{ textAlign: 'center' }}>Set your clan details here:</h4>
        <br />
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                onChange={e => this.updateForm(e)}
                name="name"
                type="text"
                value={this.state.name}
                className="validate"
              />
              <label name="name">Clan Name</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={e => this.updateForm(e)}
                id="tagline"
                name="tagline"
                value={this.state.tagline}
                type="text"
                className="validate"
              />
              <label name="tagline">Tagline</label>
            </div>
          </div>
          <div>
            <button
              onClick={e => {
                e.preventDefault();
                this.props.createClan({
                  name: this.state.name,
                  tagline: this.state.tagline
                });
                this.setState({
                  name: '',
                  tagline: '',
                  showForm: true
                });
              }}
              className="btn btn-floating"
            >
              go
            </button>
          </div>
        </form>
      </div>
    );

    return (
      <div className="row">
        <div className="col s12">
          <ul>
            <div className="col s2" />
            <li className="col s4">
              <button
                style={{ width: '100%' }}
                className="btn btn-flat waves-effect waves-dark"
                onClick={() => this.toggleList()}
              >
                Join a Clan
              </button>
            </li>
            <li className="col s4">
              <button
                style={{ width: '100%' }}
                className="btn btn-flat waves-effect waves-dark"
                onClick={() => this.toggleForm()}
              >
                Create A Clan
              </button>
            </li>
          </ul>
        </div>
        <div>{this.state.showForm ? clanList : newClanForm}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { getAllClans, createClan })(
  ClanContainer
);
