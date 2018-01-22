import React from 'react';
import { connect } from 'react-redux';
import { CollapsibleItem } from 'react-materialize';
import { joinClan } from '../../actions/index.js';

class ClanLister extends React.Component {
  render() {
    console.log(this.props.clan);
    return (
      <CollapsibleItem header={this.props.clan.name}>
        <div className="row">
          <p>{this.props.clan.tagline}</p>
          <p>Current Members:</p>
          <div>
            {this.props.clan.clan_members.map(member => (
              <div className="chip">{member.gamertag}</div>
            ))}
          </div>
          {this.props.clanId === null ? (
            <button
              className="btn-primary btn-floating"
              style={{ left: '90%' }}
              onClick={() => {
                this.props.joinClan(this.props.clan.id);
              }}
            >
              Join
            </button>
          ) : (
            <button
              style={{ left: '90%' }}
              className="btn-primary btn-floating"
              onClick={() => alert('You are already in a Clan!')}
            >
              Join
            </button>
          )}
        </div>
      </CollapsibleItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { joinClan })(ClanLister);
