import React from 'react';
import { logUserIn } from '../actions/index.js';
import { Row, Input, Button, Icon, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../index.css';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  updateForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log('the form', this.props);
    return (
      <Row>
        <div>
          <Col s={4}>
            <h4>Login</h4>
          </Col>
          <Col s={8} />
          <Col s={8} />
          <Col s={4}>
            <Input
              s={12}
              onChange={e => this.updateForm(e)}
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
            />
            <Input
              s={12}
              onChange={e => this.updateForm(e)}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
            />
            <br />
            <NavLink to="/signup">Sign Up Here!</NavLink>
            <br />
            <br />
            <Button
              floating
              large
              className="blue-grey"
              icon="add"
              s={6}
              onClick={() => {
                this.props
                  .logUserIn(this.state.email, this.state.password)
                  .then(this.props.history.push('/dashboard', 'newstate'));
              }}
              waves="light"
            >
              Login<Icon right>person</Icon>
            </Button>
          </Col>
        </div>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { logUserIn })(LoginForm);
