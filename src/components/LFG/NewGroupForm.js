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
      <div>
        <div class="card hoverable blue-grey darken-2">
          <div class="card-content white-text">
            <span class="card-title">Card Title</span>
            <div className="row">
              <Input
                className="yellow-text text-darken-2"
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
                className="yellow-text text-darken-2"
                name="difficulty"
                onChange={e => this.changeForm(e)}
                s={4}
                type="select"
                defaultValue="1"
              >
                <option value="Normal">Normal</option>
                <option value="Prestige">Prestige</option>
              </Input>
              <Input
                className="yellow-text text-darken-2"
                name="on"
                type="date"
                onChange={function(e, value) {}}
              />
            </div>
            <div className="row">
              {this.state.game_mode === 'Raid' ? (
                <Input
                  className="yellow-text text-darken-2"
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
                  className="yellow-text text-darken-2"
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
            </div>
          </div>

          <div class="card-action">
            <button
              style={{ width: '100%' }}
              onClick={() => this.props.createGroup(this.state)}
              className="btn btn-flat yellow darken-2"
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
