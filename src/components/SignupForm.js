import React from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import { connect } from 'react-redux';
import {
  signUserUp,
  getPlayerCharacters,
  setPlayerInformation
} from '../actions/index.js';
import CharactersSetup from './CharactersSetup';
import '../index.css';

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

  evaluatePlatform = arg => {
    // debugger;
    switch (arg) {
      case 'PSN':
        return 0;
      case 'XBL':
        return -1;
      default:
        return -1;
    }
  };

  storeToken = () => {
    const token = this.props.token;
    localStorage.setItem('token', token);
  };

  getMembershipId = (gamertag, platform) => {
    // debugger;
    return (
      fetch(
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
        }),
      this.props.getPlayerCharacters(this.props.current_user)
    );
  };

  render() {
    // console.log(this.props);
    return (
      <div className="container signer">
        {this.props.isLoggedIn.status ? (
          <CharactersSetup />
        ) : (
          <div>
            <Row>
              <Col s={7}>
                <div>
                  <h4>Account Signup</h4>
                  <Input
                    s={6}
                    onChange={e => this.updateForm(e)}
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    placeholder="First Name"
                  />

                  <Input
                    s={6}
                    onChange={e => this.updateForm(e)}
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    placeholder="Last Name"
                  />

                  <Input
                    s={7}
                    onChange={e => this.updateForm(e)}
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                  />

                  <Input
                    s={5}
                    onChange={e => this.updateForm(e)}
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Password"
                  />
                </div>
              </Col>
              <Col s={5}>
                <h4>Character Info</h4>
                <Input
                  s={8}
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
                {/* <Input
              s={8}
              onChange={e => this.updateForm(e)}
              type="text"
              name="main_class"
              value={this.state.main_class}
              placeholder="Main Toon- should be selector for 3 classes"
            /> */}
              </Col>
            </Row>
            <Row>
              <Button
                id="my-butt"
                floating
                large
                className="blue-grey"
                waves="light"
                icon="Go"
                fixed="true"
                onClick={() => {
                  this.getMembershipId(
                    this.state.gamertag,
                    this.state.platform
                  );
                }}
              />
            </Row>
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

// const mapDispatchToProps = dispatch => {
//   return { signUserUp: () => dispatch(signUserUp()) };
// };

export default connect(mapStateToProps, {
  signUserUp,
  getPlayerCharacters,
  setPlayerInformation
})(SignupForm);
