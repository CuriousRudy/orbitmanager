import React from 'react';

const Message = props => {
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle green">insert_chart</i>
      <span className="title">{props.message.user_id}</span>
      <p>{props.message.content}</p>
      <a href="#!" className="secondary-content">
        {`${props.message.user}`}
      </a>
    </li>
  );
};

export default Message;
