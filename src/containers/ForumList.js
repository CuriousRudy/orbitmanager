import React from 'react';
import { SideNavItem, SideNav } from 'react-materialize';
import { connect } from 'react-redux';
import '../index.css';

class ForumList extends React.Component {
  render() {
    // console.log(this.props);
    const allForums = this.props.allForums.allForums.map((forum, i) => {
      return (
        <li key={i}>
          <button
            style={{ width: '100%' }}
            className="btn-flat blue-grey darken-3 yellow-text text-darken-2"
            onClick={() =>
              this.props.dispatch({ type: 'SET_FORUM', forum: forum.id })
            }
          >
            {forum.title}
          </button>
        </li>
      );
    });
    return (
      <SideNav
        trigger={
          <button className="btn btn-floating red darken-3">'///'</button>
        }
        options={{ closeOnClick: true, menuWidth: 245, edge: 'left' }}
      >
        <SideNavItem
          style={{ minHeight: '300px' }}
          userView
          user={{
            background:
              'http://i0.kym-cdn.com/photos/images/original/000/828/049/431.gif'
          }}
        />
        <ul className="collection with-header">
          <li
            style={{ borderBottom: 'hidden', textAlign: 'center' }}
            className="collection-header blue-grey darken-3"
          >
            <h5 className="yellow-text text-darken-2">All Threads</h5>
          </li>
          {allForums}
        </ul>
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
