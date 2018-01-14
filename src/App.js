import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkLoginStatus, getPlayerCharacters } from './actions/index.js';
import './App.css';
import './index.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import DashContainer from './containers/dashContainer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import ForumContainer from './containers/forumContainer';

class App extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.checkLoginStatus(token);
    }
  };
  render() {
    // console.log('app mounted', this.props);
    return (
      <div id="the-one">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/dashboard" component={DashContainer} />
          <Route exact path="/forum" component={ForumContainer} />
          <Route exact path="/signup" component={SignupForm} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default withRouter(
  connect(mapStateToProps, { checkLoginStatus, getPlayerCharacters })(App)
);
