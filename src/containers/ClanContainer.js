import React from 'react';
import { connect } from 'react-redux';
import { getAllClans, createClan } from '../actions/index.js';
import ClanLister from '../components/ClanLister';
import { Collapsible, Tab, Tabs } from 'react-materialize';
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
    console.log('container is mounting', this.state);
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
              {this.state.loading ? (
                <div className="progress">
                  <div className="indeterminate" />
                </div>
              ) : (
                this.props.allClans.allClans
                  .filter(clan => {
                    return clan.name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase());
                  })
                  .map((clan, i) => {
                    return <ClanLister clan={clan} key={i} />;
                  })
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
              <div className="container">
                <button
                  className="btn btn-primary"
                  onClick={() => this.toggleList()}
                >
                  Join a Clan
                </button>
              </div>
            </li>
            <div className="col s2" />
            <li className="col s4">
              <div className="container" />
              <button
                className="btn btn-primary"
                onClick={() => this.toggleForm()}
              >
                Create A Clan
              </button>
            </li>
          </ul>
        </div>
        {/* <Switch>
          <Route exact path="/clanList" component={clanList}></Route>
          <Route exact path="/newClan" component={newClanForm} </Route>
        </Switch> */}
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
