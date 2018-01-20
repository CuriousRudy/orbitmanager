import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';

class NewGroupForm extends React.Component {
  state = {
    party_size: '',
    game_mode: '',
    difficulty: ''
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input type="text" />
            </div>
            <div className="input-field col s6">
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <Input s={4} type="select" defaultValue="1">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Input>
            <Input name="on" type="date" onChange={function(e, value) {}} />
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
