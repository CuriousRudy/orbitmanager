import React from 'react';
import { SideNavItem, SideNav, Icon } from 'react-materialize';
import { connect } from 'react-redux';

class ForumList extends React.Component {
  render() {
    // console.log(this.props);
    const allForums = this.props.allForums.allForums.map((forum, i) => {
      return (
        <SideNavItem
          onClick={() =>
            this.props.dispatch({ type: 'SET_FORUM', forum: forum.id })
          }
          key={i}
        >
          {forum.title}
        </SideNavItem>
      );
    });
    return (
      <SideNav
        trigger={
          <button className="btn btn-floating pulse">
            <Icon>o</Icon>
          </button>
        }
        options={{ closeOnClick: true, menuWidth: 300, edge: 'left' }}
      >
        {allForums}
      </SideNav>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForumList);
