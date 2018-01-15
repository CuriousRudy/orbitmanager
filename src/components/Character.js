import React from 'react';
import { connect } from 'react-redux';
import { postCharacter } from '../actions/index.js';
import { Card, CardTitle, Button, Col } from 'react-materialize';
import '../actions/index.js';

class Character extends React.Component {
  render() {
    // debugger;
    return (
      <div>
        <Col className="character-card" s={4}>
          <Card
            header={
              <CardTitle
                reveal
                image={this.props.character.player_emblem}
                waves="light"
              />
            }
            title={`Class: ${this.props.character.class}`}
            reveal={
              <div>
                <p>Light: {this.props.character.light}</p>
                <p>
                  About:{' '}
                  {`${this.props.character.race} ${
                    this.props.character.gender
                  }`}
                </p>
              </div>
            }
          >
            <p>
              <Button
                onClick={() => this.props.postCharacter(this.props.character)}
              >
                Import
              </Button>
            </p>
          </Card>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { postCharacter })(Character);
