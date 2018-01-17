import React from 'react';
import { connect } from 'react-redux';
import { CollapsibleItem } from 'react-materialize';

class ClanLister extends React.Component {
  render() {
    return (
      <CollapsibleItem header={this.props.clan.name} icon="filter_drama">
        <p>{this.props.clan.tagline}</p>
      </CollapsibleItem>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(ClanLister);
