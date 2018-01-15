import React from 'react';
import Member from './Member';
import '../index.css';

class MemberList extends React.Component {
  render() {
    const members = [
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member',
      'one member',
      'another member',
      'third member'
    ];
    let memberList = members.map((member, i) => {
      return <Member key={i} name={`${member}`} />;
    });
    return <ul className="memberList collection blue-grey">{memberList}</ul>;
  }
}

export default MemberList;
