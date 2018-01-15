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
      <div id="the-one" className="blue-grey  lighten-2">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/dashboard" component={DashContainer} />
          <Route exact path="/forum" component={ForumContainer} />
          <Route exact path="/signup" component={SignupForm} />
        </Switch>
        <div>
          <footer class="page-footer blue-grey darken-3
  ">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Footer Content</h5>
                  <p class="grey-text text-lighten-4">
                    You can use rows and columns here to organize your footer
                    content.
                  </p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                    <li>
                      <a class="grey-text text-lighten-3" href="#!">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a class="grey-text text-lighten-3" href="#!">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a class="grey-text text-lighten-3" href="#!">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a class="grey-text text-lighten-3" href="#!">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
                © 2014 Copyright Text
                <a class="grey-text text-lighten-4 right" href="#!">
                  More Links
                </a>
              </div>
            </div>
          </footer>
        </div>
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
