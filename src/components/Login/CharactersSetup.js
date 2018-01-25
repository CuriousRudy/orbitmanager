import React from 'react';
import { connect } from 'react-redux';
import {
  getPlayerCharacters,
  setPlayerInformation
} from '../../actions/index.js';
import Character from '../Character';
import { Row } from 'react-materialize';
import '../../index.css';

class CharactersSetup extends React.Component {
  componentDidMount = () => {
    // debugger;
    this.props.getPlayerCharacters(this.props.current_user);
  };

  render() {
    let characters = this.props.characterDetails.characters.map(
      (character, i) => {
        return <Character key={i} character={character} />;
      }
    );

    return (
      <div id="big-title" className="col s10 blue-grey blu-grey lighten-2">
        <br />
        <br />
        {this.props.isLoggedIn.status ? (
          <button
            className="yellow darken-2 pulse btn waves-effect waves-dark blue-grey-text text-darken-2"
            onClick={() => {
              // debugger;
              this.props.characterIds.map(characterId => {
                return this.props.setPlayerInformation(
                  this.props.current_user,
                  characterId
                );
              });
            }}
          >
            Import Your Guardians
          </button>
        ) : null}
        <br />
        <br />
        <Row>{characters}</Row>
        <button className="btn waves-effect waves-dark yellow darken-2">
          <a className="blue-grey-text darken-2" href="/dashboard">
            Done
          </a>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};
export default connect(mapStateToProps, {
  getPlayerCharacters,
  setPlayerInformation
})(CharactersSetup);
