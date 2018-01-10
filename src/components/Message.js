import React from 'react';
import { Row, Col } from 'react-materialize';

const Message = props => {
  return (
    <Row>
      <Col s={12}>
        <div>{props.message}</div>
      </Col>
    </Row>
  );
};

export default Message;
