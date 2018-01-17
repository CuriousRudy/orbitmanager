import React from 'react';
import { connect } from 'react-redux';
import { CollapsibleItem, Toast } from 'react-materialize';
import { joinClan } from '../actions/index.js';

class ClanLister extends React.Component {
  render() {
    return (
      <CollapsibleItem header={this.props.clan.name} icon="filter_drama">
        <div className="row">
          <p>{this.props.clan.tagline}</p>
          {this.props.clanId.clanId ? (
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
              className="btn-primary btn-floating disabled"
              // onClick={() => alert('You are already in a Clan!')}
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
