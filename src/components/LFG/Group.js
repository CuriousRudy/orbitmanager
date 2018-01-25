import React from 'react';
import { connect } from 'react-redux';
import { joinGroup } from '../../actions/index.js';

class Group extends React.Component {
  render() {
    return (
      <div className="col s4">
        <div className="card hoverable blue-grey large darken-2 sticky-action">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              alt="a destiny pic"
              className="activator"
              src="img/nightfall.jpg"
            />
          </div>
          <div className="card-content blue-grey darken-2">
            <span className="card-title activator yellow-text center text-darken-2">
              {this.props.group.game_mode}
            </span>
            <div className="card-action">
              {this.props.group.party_size === 0 ? (
                <button style={{ width: '100%' }} className="btn-flat disabled">
                  Party Full
                </button>
              ) : (
                <button
                  style={{ width: '100%' }}
                  onClick={() => this.props.joinGroup(this.props.group.id)}
                  className="btn-flat waves-effect waves-light yellow darken-2 blue-grey-text text-darken-4"
                >
                  Join
                </button>
              )}
            </div>
          </div>
          <div className="card-reveal blue-grey darken-2">
            <span className="card-title  yellow-text center text-darken-2">
              {this.props.group.game_mode}
            </span>
            <h4 className="yellow-text center text-darken-2">
              {this.props.group.difficulty}
            </h4>
            {this.props.group.party_size === 0 ? null : (
              <p className="yellow-text center text-darken-2">looking for: </p>
            )}
            {this.props.group.party_size === 0 ? null : (
              <p className="yellow-text center text-darken-2">
                {this.props.group.party_size} players
              </p>
            )}
            <br />
            <br />

            <div>
              <h4 className="yellow-text center text-darken-2">
                Guardians Engaged
              </h4>
            </div>
            <div>
              {this.props.group.fireteam.map((member, i) => (
                <div
                  key={i}
                  className="chip small yellow darken-2 blue-grey-text text-darken-2"
                >
                  {member.gamertag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { joinGroup })(Group);
