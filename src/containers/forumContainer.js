import React from 'react';
import MemberList from '../components/memberList';
import ForumMessages from '../components/ForumMessages';
import ForumList from './ForumList';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';
import '../index.css';

class ForumContainer extends React.Component {
  render() {
    // const forums = forums.map(forum => {
    // return <ForumLink />
    // })
    return (
      <div>
        <ForumList />
        <div className="container">
          <h3>This is the forum</h3>
          <Row>
            <Col s={2}>
              <h3>Members</h3>

              <MemberList />
            </Col>
            <Col s={10}>
              <div className="blue-grey darken-4">
                <h3> This is a forum message window.</h3>
                <div>
                  <ForumMessages />
                </div>
              </div>
            </Col>
            <Col s={12}>
              <div>
                {/* <p>
                  all of the messages are shown here, probably with overflow:
                  scroll; to make for a compact ux, with all of the content,
                  regardless of the length of the thread. the Reddit style
                  thread could be nice, but would require each post/message to
                  be aware of it's parent to nest properly...🤔
                </p>
                <p>
                  all of the messages are shown here, probably with overflow:
                  scroll; to make for a compact ux, with all of the content,
                  regardless of the length of the thread. the Reddit style
                  thread could be nice, but would require each post/message to
                  be aware of it's parent to nest properly...🤔
                </p> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ForumContainer);
