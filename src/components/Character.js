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

  //needs one more switch to set the background of the character card for the class type

  setClassName = className => {
    switch (className) {
      case '2271682572':
        return 'Warlock';
      case '3655393761':
        return 'Titan';
      case '671679327':
        return 'Hunter';
      default:
        return 'Guardian';
    }
  };

  setRace = raceHash => {
    switch (raceHash) {
      case '2803282938':
        return 'Awoken';
      case '3887404748':
        return 'Human';
      case '898834093':
        return 'Exo';
      default:
        return 'Hmmm...';
    }
  };

  setGender = genderHash => {
    switch (genderHash) {
      case '2204441813':
        return 'Female';
      case '3111576190':
        return 'Male';
      default:
        return 'Male';
    }
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
              title={this.setClassName(this.props.character.player_class)}
              reveal={
                <div>
                  <p>{this.props.character.light} Light</p>
                  <p>
                    {`${this.setRace(this.props.character.race)}
                      ${this.setGender(this.props.character.gender)}
                      ${this.setClassName(this.props.character.player_class)}
                    `}
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
