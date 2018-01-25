import React from 'react';
import { connect } from 'react-redux';
import { getAllClans, createClan } from '../actions/index.js';
import ClanLister from '../components/Clan/ClanLister';
// import { Collapsible } from 'react-materialize';
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
    if (localStorage.getItem('token')) {
      if (this.state.loading) {
        this.props.getAllClans();
      } else {
        this.setState({
          loading: false
        });
      }
    } else {
      this.props.history.push('/login');
    }
    this.setState({ loading: true });
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
              <div class="col s12 m6">
                <div class="card blue-grey darken-2">
                  <div class="card-content white-text">
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
          </div>
        </div>
        <div>
          <div className="col s12 ">
            <div className="row">
              <div className="col s1" />
              <div className="col s10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    const newClanForm = (
      <div id="test2" className="container">
        <div className="row" />

        <br />
        <div class="card hoverable blue-grey darken-2">
          <div class="card-content white-text">
            <span class="card-title yellow-text text-darken-2">
              Create a Clan
            </span>
            <div className="row">
              <div className="input-field col s6">
                <input
                  onChange={e => this.updateForm(e)}
                  name="name"
                  type="text"
                  value={this.state.name}
                  className="validate"
                />
                <label class="yellow-text text-darken-2" name="name">
                  Clan Name
                </label>
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
                <label class="yellow-text text-darken-2" name="tagline">
                  Tagline
                </label>
              </div>
            </div>
          </div>
          <div class="card-action">
            <button
              style={{ width: '100%' }}
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
              className="btn btn-flat yellow darken-2"
            >
              go
            </button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="blue-grey lighten-2" style={{ height: '100vh' }}>
        <br />
        <div className="row">
          <div className="col s12">
            <ul>
              <div className="col s2" />
              <li className="col s4">
                <button
                  style={{ width: '100%' }}
                  className="blue-grey-text text-darken-2 waves-effect waves-light btn-flat yellow darken-2"
                  onClick={() => this.toggleList()}
                >
                  Join a Clan
                </button>
              </li>
              <li className="col s4">
                <button
                  style={{ width: '100%' }}
                  className="blue-grey-text text-darken-2 waves-effect waves-light btn-flat yellow darken-2"
                  onClick={() => this.toggleForm()}
                >
                  Create A Clan
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {this.state.showForm ? clanList : newClanForm}
        </div>
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
