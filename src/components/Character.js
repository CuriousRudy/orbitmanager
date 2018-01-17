import React from 'react';
import { connect } from 'react-redux';
import { postCharacter } from '../actions/index.js';
import { Card, CardTitle, Button, Col } from 'react-materialize';
import '../actions/index.js';

class Character extends React.Component {
  state = {
    clicked: false,
    loading: true
  };
  componentDidMount = () => {
    if (this.props.character.player_emblem) {
      this.setState({ loading: false });
    }
  };

  importCharacter = () => {
    this.props.postCharacter(this.props.character);
    this.setState({ clicked: true });
  };
  render() {
    const buttons = !this.state.clicked ? (
      <Button onClick={() => this.importCharacter()}>Import</Button>
    ) : (
      <Button disabled="true">Imported</Button>
    );
    // debugger;
    return (
      <div>
        {this.state.loading ? (
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        ) : (
          <Col className="character-card" s={4}>
            <Card
              className="hoverable"
              header={
                <CardTitle
                  reveal
                  image={this.props.character.player_emblem}
                  waves="light"
                />
              }
              title={`Class: ${this.props.character.player_class}`}
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
              <p>{this.props.dashboard ? null : buttons}</p>
            </Card>
          </Col>
        )}
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
