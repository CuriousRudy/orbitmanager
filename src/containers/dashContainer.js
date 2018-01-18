import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters } from '../actions/index.js';
import Character from '../components/Character';

class DashContainer extends React.Component {
  render() {
    const characters = this.props.characterDetails.characters.map((char, i) => {
      return <Character character={char} key={i} dashboard={'true'} />;
    });
    console.log('dash mounted', this.props);
    return (
      <div className="blue-grey lighten-2" style={{ height: '75vh' }}>
        <div className="row">
          <h5 style={{ textAlign: 'center' }}>Clan Details</h5>
        </div>
        <h5 style={{ textAlign: 'center' }}>Dashboard</h5>
        <div className="row">{characters}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getPlayerCharacters })(DashContainer);
