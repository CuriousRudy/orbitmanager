import React from 'react';

const Message = props => {
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle green">insert_chart</i>
      <span className="title">Title</span>
      <p>Second Line</p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a>
    </li>
  );
};

export default Message;
