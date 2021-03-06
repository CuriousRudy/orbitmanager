import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';

class NavBar extends React.Component {
  logout = () => {
    localStorage.clear();
    this.props.dispatch({
      type: 'LOGOUT_USER'
    });
  };

  render() {
    // console.log('nav mounted', this.props);
    return (
      <nav>
        <div style={{ zIndex: '3' }} className="nav-wrapper blue-grey darken-2">
          <NavLink to="/">
            <img
              alt="an old crest, the fallen symbol of the Tower's Old Vanguard"
              src="../img/vanguard_icon.jpg"
            />
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/forum">Forum</NavLink>
            </li>
            {/* <ul id="dropdown1" className="dropdown-content">
              <li>
                <NavLink to="/LFG">LFG</NavLink>
              </li>
              <li>
                <a href="#!">Create Group</a>
              </li>
              <li className="divider" />
            </ul>
            <li>
              <a
                className="dropdown-button"
                href="#!"
                data-activates="dropdown1"
              >
                Dropdown
              </a>
            </li> */}
            <li>
              <NavLink to="/LFG">LFG</NavLink>
            </li>
            <li>
              <NavLink to="/clans">Clans</NavLink>
            </li>
            <li>
              {this.props.isLoggedIn.status ? (
                <NavLink onClick={() => this.logout()} to="/">
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(NavBar);
