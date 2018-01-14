import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Button } from 'react-materialize';

class Character extends React.Component {
  render() {
    // debugger;
    return (
      <div>
        <Card
          header={
            <CardTitle
              reveal
              image={this.props.character.playerEmblem}
              waves="light"
            />
          }
          title={`Class: ${this.props.character.class}`}
          reveal={
            <div>
              <p>Light: {this.props.character.light}</p>
              <p>
                About:{' '}
                {`${this.props.character.race} ${this.props.character.gender}`}
              </p>
            </div>
          }
        >
          <p>
            <Button>Import</Button>
          </p>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Character);
