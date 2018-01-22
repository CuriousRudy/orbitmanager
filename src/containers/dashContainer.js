import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters } from '../actions/index.js';
import Character from '../components/Character';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class DashContainer extends React.Component {
  render() {
    const characters = this.props.characterDetails.characters.map((char, i) => {
      return <Character character={char} key={i} dashboard={'true'} />;
    });
    // console.log('dash mounted', this.props);
    return (
      <div className="blue-grey lighten-2" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col s12">
            <Collapsible>
              <CollapsibleItem header="Your Activity">
                <p>this has some information</p>
              </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Collapsible>
              <CollapsibleItem header="Your Guardians">
                <div className="row">{characters}</div>
              </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Collapsible>
              <CollapsibleItem header="In-Game Event Status">
                <h5>
                  this is where some interesting information about the game
                  events will go!
                </h5>
              </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getPlayerCharacters })(DashContainer);
