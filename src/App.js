import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import dashContainer from './containers/dashContainer';
import LoginForm from './components/LoginForm';
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    // const user = this.props.store.getState().current_user.loggedInUser;
    console.log(this.props);
    return (
      <div id="root">
        <NavBar />
        <div>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/dashboard" component={dashContainer} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
