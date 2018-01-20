import React from 'react';
import '../../index.css';
import Message from './Message';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/index.js';

class ForumMessages extends React.Component {
  state = {
    loading: true
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.displayedForum !== this.props.displayedForum) {
      this.props.getMessages(nextProps.displayedForum);
    }
    this.setState({ loading: false });
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.displayedForum !== this.props.displayedForum;
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
