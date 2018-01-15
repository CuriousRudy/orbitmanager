import React from 'react';
import '../index.css';
import Message from './Message';
// import {} from 'react-materialize'

class ForumMessages extends React.Component {
  componentDidMount = () => {
    //fetch all messages where message.forum_id === this.props.store.getState().currentThreadId
    //messages.map(message => <Message message={message})
  };
  render() {
    const messages = [
      'hey there',
      "what's up",
      'how you doin!',
      'this shit is dope',
      'hey there',
      "what's up",
      'how you doin!',
      'this shit is dope',
      'hey there',
      "what's up",
      'how you doin!',
      'this shit is dope',
      'hey there',
      "what's up",
      'how you doin!',
      'this shit is dope'
    ];
    const messageList = messages.map((message, i) => {
      return <Message key={i} message={message} />;
    });
    return <ul className="blue-grey darken-3">{messageList}</ul>;
  }
}

export default ForumMessages;
