import React from 'react';

const Member = props => {
  return (
    <li className="blue-grey darken-3 collection-item avatar">
      <i className="blue-grey material-icons circle green">insert_chart</i>
      <span className="blue-grey title">Title</span>
      <p>
        First Line <br />
        Second Line
      </p>
      <a href="#!" className="blue-grey secondary-content">
        <i className="blue-grey material-icons">grade</i>
      </a>
    </li>
  );
};

export default Member;
