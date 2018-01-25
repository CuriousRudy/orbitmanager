import React from 'react';
import { connect } from 'react-redux';
// import { CollapsibleItem } from 'react-materialize';
import { joinClan } from '../../actions/index.js';

class ClanLister extends React.Component {
  render() {
    // console.log(this.props.clan);
    return (
      <div class="col s12 card hoverable blue-grey darken-2">
        <div class="card-content yellow-text text-darken-2">
          <span class="card-title">{this.props.clan.name}</span>
          <p>{this.props.clan.tagline}</p>
          <p>Current Members:</p>
          <div>
            {this.props.clan.clan_members.map((member, i) => (
              <div key={i} className="chip yellow darken-2">
                {member.gamertag}
              </div>
            ))}
          </div>
        </div>
        <div class="card-action">
          {this.props.clanId === null ? (
            <button
              className="btn-flat small yellow darken-2 right"
              onClick={() => {
                this.props.joinClan(this.props.clan.id);
              }}
            >
              Join
            </button>
          ) : (
            <button
              className=" btn-flat yellow small darken-2 disabled right"
              // onClick={() => alert('You are already in a Clan!')}
            >
              You're In a Clan!
            </button>
          )}
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

export default connect(mapStateToProps, { joinClan })(ClanLister);
