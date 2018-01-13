import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';

class NavBar extends React.Component {
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.dispatch({ type: 'LOGIN_USER', token: token });
    }
  };

  logout = () => {
    localStorage.clear();
    this.props.dispatch({
      type: 'LOGOUT_USER'
    });
  };
  render() {
    console.log(this.props);
    // const toggle = this.props.isLoggedIn.status ? (
    //   <NavItem onClick={() => localStorage.clear()} href="/">
    //     <Icon>person</Icon>
    //   </NavItem>
    // ) : (
    //   <NavItem href="/login">
    //     <Icon>check_circle</Icon>
    //   </NavItem>
    // );

    // return (
    //   <Navbar
    //     right
    //     className="blue-grey darken-2"
    //     brand={
    //       <img
    //         alt="an old crest, the fallen symbol of the Tower's Old Vanguard"
    //         src="../img/vanguard_icon.jpg"
    //       />
    //     }
    //   >
    //     <NavItem href="/dashboard">
    //       <Icon>person</Icon>
    //     </NavItem>
    //     <NavItem href="/forum">
    //       <Icon>chat</Icon>
    //     </NavItem>
    //     {toggle}
    //   </Navbar>
    // );
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-2">
          <NavLink to="/">
            <img
              alt="an old crest, the fallen symbol of the Tower's Old Vanguard"
              src="../img/vanguard_icon.jpg"
            />
          </NavLink>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/forum">Components</NavLink>
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
  return state;
};

export default connect(mapStateToProps, null)(NavBar);
