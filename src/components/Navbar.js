import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import '../index.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        right
        className="blue-grey darken-2"
        brand={
          <img
            alt="an old crest, the fallen symbol of the Tower's Old Vanguard"
            src="../img/vanguard_icon.jpg"
          />
        }
      >
        <NavItem href="/dashboard">
          <Icon>person</Icon>
        </NavItem>
        <NavItem href="/forum">
          <Icon>chat</Icon>
        </NavItem>
        <NavItem href="/login">
          <Icon>check_circle</Icon>
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;
