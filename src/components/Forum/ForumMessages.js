import React from 'react';
import '../../index.css';
import Message from './Message';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/index.js';

class ForumMessages extends React.Component {
  componentDidMount = () => {
    if (this.props.displayedForum) {
      this.props.getMessages(this.props.forumId);
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.displayedForum !== this.props.displayedForum) {
      this.props.getMessages(nextProps.displayedForum);
    }
  };

  render() {
    const messageList = this.props.currentForumMessages.messages.map(
      (message, i) => {
        return <Message key={i} message={message} />;
      }
    );
    return <ul className="collection blue-grey darken-3">{messageList}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { getMessages })(ForumMessages);
