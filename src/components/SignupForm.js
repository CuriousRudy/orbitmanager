import React from 'react';
import { Row, Input, Button, Icon, Col } from 'react-materialize';
import { connect } from 'react-redux';
import '../index.css';

class SignupForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gamertag: '',
    light_level: '',
    main_class: ''
  };

  updateForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container signer">
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
                s={4}
                onChange={e => this.updateForm(e)}
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email"
              />

              <Input
                s={8}
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
              onChange={e => this.updateForm(e)}
              type="number"
              name="light_level"
              value={this.state.light_level}
              placeholder="LL"
            />
            <Input
              s={8}
              onChange={e => this.updateForm(e)}
              type="text"
              name="main_class"
              value={this.state.main_class}
              placeholder="Main Toon- should be selector for 3 classes"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SignupForm);
