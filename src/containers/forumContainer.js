import React from 'react';
// import MemberList from '../components/memberList';
import ForumMessages from '../components/Forum/ForumMessages';
import ForumList from './ForumList';
import { fetchForums, createMessage } from '../actions/index.js';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import '../index.css';

class ForumContainer extends React.Component {
  state = {
    content: ''
  };

  componentDidMount = () => {
    this.props.fetchForums();
  };

  updateMessage = e => {
    this.setState({
      content: e.target.value
    });
  };
  render() {
    console.log(this.props);
    // const forums = forums.map(forum => {
    // return <ForumLink />
    // })
    return (
      <div>
        <ForumList />
        <div>
          <Row>
            <Col offset="s1" s={3}>
              <Collapsible s={12} defaultActiveKey={0}>
                <CollapsibleItem selected header="Forum info">
                  This is some information about the forum that you are looking
                  at
                </CollapsibleItem>
              </Collapsible>
              <Collapsible s={12}>
                <CollapsibleItem header="Forum info">
                  Type your message below:
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    value={this.state.content}
                    onChange={e => this.updateMessage(e)}
                  />
                  <label for="textarea1">Textarea</label>
                  <br />
                  <button
                    onClick={() => {
                      this.props.createMessage(
                        this.props.displayedForum,
                        this.state.content
                      );
                      this.setState({ content: '' });
                    }}
                    className="btn btn-floating waves-effect waves-dark pulse"
                  />
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col s={7}>
              <div id="messageSpace">
                {this.props.displayedForum ? (
                  <ForumMessages forumId={this.props.displayedForum} />
                ) : (
                  <div className="progress">
                    <div className="indeterminate" />
                  </div>
                )}
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

export default connect(mapStateToProps, { fetchForums, createMessage })(
  ForumContainer
);
