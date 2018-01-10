import React from 'react';
import { CollapsibleItem } from 'react-materialize';

const Member = props => {
  return (
    <CollapsibleItem header={`${props.name}`}>
      <div>some stuff about user</div>
    </CollapsibleItem>
  );
};

export default Member;
