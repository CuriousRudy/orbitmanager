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
    const allForums = forums.map(forum => {
      return <SideNavItem>this is a forum</SideNavItem>;
    });
    return (
      <SideNav
        trigger={
          <Button id="sidebar" className="scale-transition scale-in">
            <Icon>forums</Icon>
          </Button>
        }
        options={{ closeOnClick: true, menuWidth: 260, edge: 'left' }}
      >
        {allForums}
      </SideNav>
    );
  }
}
export default ForumList;
