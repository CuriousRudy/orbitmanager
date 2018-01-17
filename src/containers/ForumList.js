import React from 'react';
import { SideNavItem, SideNav, Button, Icon } from 'react-materialize';

class ForumList extends React.Component {
  render() {
    const forums = [
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum',
      'this is a forum'
    ];
    const allForums = forums.map((forum, i) => {
      return <SideNavItem key={i}>this is a forum</SideNavItem>;
    });
    return (
      <SideNav
        trigger={
          <a id="sidebar" className="btn btn-floating pulse">
            <Icon>menu</Icon>
          </a>
        }
        options={{ closeOnClick: true, menuWidth: 260, edge: 'left' }}
      >
        {allForums}
      </SideNav>
    );
  }
}
export default ForumList;
