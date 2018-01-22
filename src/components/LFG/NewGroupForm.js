import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
// import { createGroup } from '../../actions/index.js';

class NewGroupForm extends React.Component {
  state = {
    party_size: '',
    game_mode: 'Raid',
    difficulty: ''
  };

  changeForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <Input
              name="game_mode"
              onChange={e => this.changeForm(e)}
              s={4}
              type="select"
              defaultValue="1"
            >
              <option value="Raid">Raid</option>
              <option value="Nightfall">Nightfall</option>
              <option value="PvP">PvP</option>
            </Input>
            <Input
              name="difficulty"
              onChange={e => this.changeForm(e)}
              s={4}
              type="select"
              defaultValue="1"
            >
              <option value="Normal">Normal</option>
              <option value="Prestige">Prestige</option>
            </Input>
            <Input name="on" type="date" onChange={function(e, value) {}} />
          </div>
          <div className="row">
            {this.state.game_mode === 'Raid' ? (
              <Input
                s={4}
                name="party_size"
                onChange={e => this.changeForm(e)}
                type="select"
                defaultValue="1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Input>
            ) : (
              <Input
                s={4}
                onChange={e => this.changeForm(e)}
                name="party_size"
                type="select"
                defaultValue="1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Input>
            )}
            <div className="col s1" />
            <button
              onClick={() => this.props.createGroup(this.state)}
              className="col s4 btn btn-flat"
            >
              create
            </button>
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
export default connect(mapStateToProps)(NewGroupForm);
