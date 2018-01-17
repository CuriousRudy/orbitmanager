import React from 'react';
import { connect } from 'react-redux';
import { getAllClans } from '../actions/index.js';
import ClanLister from '../components/ClanLister';
import { Collapsible } from 'react-materialize';

class ClanContainer extends React.Component {
  state = {
    loading: true
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    if (this.state.loading) {
      this.props.getAllClans();
    } else {
      this.setState({
        loading: false
      });
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.allClans !== this.props.allClans) {
      this.setState({ loading: false });
    }
  };

  render() {
    console.log(this.state, this.props);
    return (
      <div>
        <h3>This has all the clans</h3>
        <div className="row">
          <div className="col s4" />
          <div className="col s8">
            <div className="row">
              <div className="input-field col s6">
                {/* <i class="material-icons prefix">search</i> */}
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  placeholder="Search for a clan by name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col s12">
            <Collapsible popout accordion>
              {this.state.loading ? (
                <div className="progress">
                  <div className="indeterminate" />
                </div>
              ) : (
                this.props.allClans.map((clan, i) => {
                  return <ClanLister clan={clan} key={i} />;
                })
              )}
            </Collapsible>
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

export default connect(mapStateToProps, { getAllClans })(ClanContainer);