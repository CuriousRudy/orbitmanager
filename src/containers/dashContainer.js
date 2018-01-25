import React from 'react';
import { connect } from 'react-redux';
import { getPlayerCharacters, dailyStatus } from '../actions/index.js';
import Character from '../components/Character';
import PvEInfo from '../components/Milestones/RaidInfo';
// import { Collapsible, CollapsibleItem } from 'react-materialize';
import '../index.css';

class DashContainer extends React.Component {
  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.props.dailyStatus();
    } else {
      this.props.history.push('/login');
    }
  };
  render() {
    const characters = this.props.characterDetails.characters.map((char, i) => {
      return <Character character={char} key={i} dashboard={'true'} />;
    });
    // console.log('dash mounted', this.props);
    return (
      <div className="blue-grey lighten-2">
        <br />
        <br />
        <div className="row">
          <div className="col s1" />
          <div className="col s10">
            <div className="row">
              <div className="col s12">
                <div className="card blue-grey darken-2">
                  <div className="card-content white-text">
                    {this.props.milestones ? (
                      <PvEInfo />
                    ) : (
                      <div className="progress">
                        <div className="indeterminate" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col s12 ">
                <div className="card blue-grey darken-4">
                  <div className="card-content white-text">
                    <span className="card-title yellow-text text-darken-2">
                      Your Guardians
                    </span>
                  </div>
                  <div className="card-action">
                    <div className="row">{characters}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col s12">
                <div className="card blue-grey darken-2">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                  <div className="card-action">No links lollllll</div>
                </div>
              </div>
            </div> */}
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
