import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkLoginStatus, getPlayerCharacters } from './actions/index.js';
import './App.css';
import './index.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import Welcome from './components/Welcome';
import LoginForm from './components//Login/LoginForm';
import SignupForm from './components/Login/SignupForm';
import DashContainer from './containers/dashContainer';
import ClanContainer from './containers/ClanContainer';
import ForumContainer from './containers/forumContainer';
import GroupContainer from './containers/GroupContainer';

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
      <div style={{ width: '100%' }}>
        <div className="blue-grey lighten-4">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/dashboard" component={DashContainer} />
            <Route exact path="/forum" component={ForumContainer} />
            <Route exact path="/clans" component={ClanContainer} />
            <Route exact path="/LFG" component={GroupContainer} />
          </Switch>
        </div>
        <div>
          <footer
            id="page-footer"
            style={{
              bottom: 0,
              width: 'auto'
            }}
            className="page-footer blue-grey darken-4"
          >
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Footer Content</h5>
                  <p className="grey-text text-lighten-4">
                    You can use rows and columns here to organize your footer
                    content.
                  </p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li>
                      <a className="grey-text text-lighten-3" href="#!">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a className="grey-text text-lighten-3" href="#!">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a className="grey-text text-lighten-3" href="#!">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a className="grey-text text-lighten-3" href="#!">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
                © 2014 Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">
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
