import React from 'react';
import { Input } from 'react-materialize';
import { connect } from 'react-redux';
import {
  signUserUp,
  getPlayerCharacters,
  setPlayerInformation
} from '../../actions/index.js';
import CharactersSetup from './CharactersSetup';
import '../../index.css';

class SignupForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gamertag: '',
    platform: '',
    membershipId: ''
  };

  updateForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  storeToken = () => {
    const token = this.props.token;
    localStorage.setItem('token', token);
  };

  getMembershipId = (gamertag, platform) => {
    // debugger;
    return fetch(
      `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${platform}/${gamertag}/`,
      {
        headers: {
          'x-api-key': '1e8df2625cb24d04938314296f91f366'
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        this.props.signUserUp({
          ...this.state,
          membershipId: data.Response[0].membershipId
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div style={{ height: '100vh' }} className="blue-grey lighten-2">
        <br />
        <br />
        {this.props.isLoggedIn.status ? (
          <div className="row">
            <div className="col s12">
              <div className="col s1" />
              <CharactersSetup />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col s1" />
            <div className="col s10">
              <div className="card col s12 blue-grey darken-2">
                <div className="card-content yellow-text text-darken-2">
                  <span className="card-title">Card Title</span>
                  <div className="row">
                    <div className="col s12">
                      <div className="col s8">
                        <input
                          className="input-field yellow-text text-darken-2 col s5"
                          onChange={e => this.updateForm(e)}
                          type="text"
                          name="first_name"
                          value={this.state.first_name}
                          placeholder="First Name"
                        />
                        <div className="col s1" />
                        <input
                          className="input-field yellow-text text-darken-2 col s4"
                          onChange={e => this.updateForm(e)}
                          type="text"
                          name="last_name"
                          value={this.state.last_name}
                          placeholder="Last Name"
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input
                          className="input-field yellow-text text-darken-2 col s5"
                          onChange={e => this.updateForm(e)}
                          type="email"
                          name="email"
                          value={this.state.email}
                          placeholder="Email"
                        />
                        <div className="col s1" />
                        <input
                          className="input-field yellow-text text-darken-2 col s4"
                          onChange={e => this.updateForm(e)}
                          type="password"
                          name="password"
                          value={this.state.password}
                          placeholder="Password"
                        />
                      </div>
                      <div className="col s4">
                        <input
                          className="input-field yellow-text text-darken-2 col s12 "
                          onChange={e => this.updateForm(e)}
                          type="text"
                          name="gamertag"
                          value={this.state.gamertag}
                          placeholder="Gamertag (should have option for icon)"
                        />
                        <Input
                          s={4}
                          type="select"
                          label="Platform"
                          name="platform"
                          value={this.state.platform}
                          onChange={e => this.updateForm(e)}
                        >
                          <option value="2">PSN</option>
                          <option value="1">XBL</option>
                        </Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <button
                    className="btn-flat right yellow darken-2 waves-effect waves-light"
                    onClick={() => {
                      this.getMembershipId(
                        this.state.gamertag,
                        this.state.platform
                      );
                    }}
                  >
                    Create Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {
  signUserUp,
  getPlayerCharacters,
  setPlayerInformation
})(SignupForm);
