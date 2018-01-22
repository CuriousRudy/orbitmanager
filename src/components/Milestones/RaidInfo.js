import React from 'react';
import { connect } from 'react-redux';
import { raidOrderInfo } from '../../services/api.js';
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';

class PvEInfo extends React.Component {
  state = {
    normal: this.props.milestones[3660836525].availableQuests[0].activity
      .variants[0],
    prestige: this.props.milestones[3660836525].availableQuests[0].activity
      .variants[1]
  };
  // componentDidMount = () => {
  //   const raid = ;
  //
  // };

  render() {
    const normal = raidOrderInfo(`${this.state.normal.activityHash}`);
    const prestige = raidOrderInfo(`${this.state.prestige.activityHash}`);
    console.log(this.state.normal.activityHash);
    return (
      <CollapsibleItem header="Game Info">
        <div className="col s4 left">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="img/nightfall.jpg" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Nightfall<i class="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">This is a link</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Card Title<i class="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
        <div className="col s8">
          <div className="col s12" style={{ height: '22.5em' }}>
            {normal.order.map((activity, i) => (
              <div key={i} class="card small col s4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={activity.image} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    {activity.name}
                  </span>
                  <p>
                    Datto's guide can be found
                    <a href={activity.video}> here</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Card Title<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col s12 style={{ height: '50%' }}">
            {prestige.order.map((activity, i) => (
              <div key={i} class="card vertical small col s4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={activity.image} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    {activity.name}
                  </span>
                  <p>
                    Datto's guide can be found
                    <a href={activity.video}> here</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Card Title<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            ))}
          </div>
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
export default connect(mapStateToProps)(PvEInfo);
