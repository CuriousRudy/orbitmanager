import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters, setPlayerInformation } from '../actions/index.js';
import Character from './Character';
import '../index.css';

class CharactersSetup extends React.Component {
  componentDidMount = () => {
    // debugger;
    this.props.getPlayerCharacters(this.props.current_user);
  };

  //   debugger;
  //   if (this.props.characterDetails.length < 3) {
  //     this.props.characterIds.map(characterId => {
  //       return this.props.setPlayerInformation(
  //         this.props.current_user,
  //         characterId
  //       );
  //     });
  //   }
  // };

  render() {
    const characters = this.props.characterDetails.characters.map(
      (character, i) => {
        return <Character key={i} character={character} />;
      }
    );
    return (
      <div>
        <h3 id="big-title">Import Your Guardians</h3>
        <div className="container">
          {this.props.isLoggedIn.status ? (
            <button
              onClick={() => {
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
        </div>

        <div>{characters}</div>
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
