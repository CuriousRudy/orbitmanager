import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters, dailyStatus } from '../actions/index.js';
import Character from '../components/Character';
import PvEInfo from '../components/Milestones/RaidInfo';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class DashContainer extends React.Component {
  componentDidMount = () => {
    this.props.dailyStatus();
  };
  render() {
    const characters = this.props.characterDetails.characters.map((char, i) => {
      return <Character character={char} key={i} dashboard={'true'} />;
    });
    // console.log('dash mounted', this.props);
    return (
      <div className="blue-grey lighten-2" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col s1" />
          <div className="col s10">
            <div className="row">
              <div className="col s12">
                <Collapsible>
                  {this.props.milestones ? <PvEInfo /> : null}
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
                  <CollapsibleItem header="Your Activity">
                    <p>this has some information</p>
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { getPlayerCharacters, dailyStatus })(
  DashContainer
);
