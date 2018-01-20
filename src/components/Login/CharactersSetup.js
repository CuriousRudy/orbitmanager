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
      <div id="big-title">
        <h3>Import Your Guardians</h3>

        {this.props.isLoggedIn.status ? (
          <button
            className="pulse"
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
        <Row>{characters}</Row>
        <button>
          <a href="/dashboard">Done</a>
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
