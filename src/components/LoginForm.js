import React from 'react';
import { logUserIn } from '../actions/index.js';
import { Row, Input, Button, Icon, Col } from 'react-materialize';
import { connect } from 'react-redux';
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
    console.log('the form', this.props);
    return (
      <div className="uniqueLogin">
        <Row>
          <Col s={1} />
          <Col>
            <div className="container">
              <Input
                s={12}
                onChange={e => this.updateForm(e)}
                type="email"
                name="email"
                value={this.state.email}
              />
              <Input
                s={12}
                onChange={e => this.updateForm(e)}
                type="password"
                name="password"
                value={this.state.password}
              />
              <Button
                s={6}
                onClick={() =>
                  this.props.logUserIn(this.state.email, this.state.password)
                }
                waves="light"
              >
                Login<Icon right>person</Icon>
              </Button>
              <br />
              <a href="/signup">Sign Up</a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { logUserIn })(LoginForm);
