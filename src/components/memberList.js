import React from 'react';
import { Collapsible } from 'react-materialize';
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
    let memberList = members.map(member => {
      return <Member name={`${member}`} />;
    });
    return (
      <div>
        <Collapsible className="memberList">{memberList}</Collapsible>
      </div>
    );
  }
}

export default MemberList;
