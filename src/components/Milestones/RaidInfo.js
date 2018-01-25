import React from 'react';
import { connect } from 'react-redux';
import { raidOrderInfo, defineModifier } from '../../services/api.js';

class PvEInfo extends React.Component {
  state = {
    nightfall: this.props.milestones[2171429505].availableQuests[0].activity
      .modifierHashes,
    prestige: this.props.milestones[3660836525].availableQuests[0].activity
      .variants[1]
  };
  // componentDidMount = () => {
  //   const raid = ;
  //
  // };

  render() {
    const prestige = raidOrderInfo(`${this.state.prestige.activityHash}`);
    const nightfall = this.state.nightfall.map(modifier =>
      defineModifier(`${modifier}`)
    );
    console.log(nightfall);
    return (
      <div className="row">
        <div className="col s4 left">
          <div className="card hoverable blue-grey darken-4">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                alt="insignia of the nightfall strike"
                src="img/nightfall.jpg"
              />
            </div>
            <div className="card-content blue-grey darken-4">
              <span className="card-title activator yellow-text text-darken-2 center">
                Nightfall
              </span>
              <p />
            </div>
            <div className="card-reveal blue-grey darken-4">
              <span className="card-title yellow-text text-darken-2 center">
                This week's Nightfall Strike
              </span>
              <span>
                <p className="yellow-text text-darken-2 center">
                  --------------------------------------------------------
                </p>
              </span>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col s12">
                  {nightfall.map(modifier => (
                    <div className="col s6">
                      <p className="yellow-text text-darken-2 center">
                        {modifier.name}
                      </p>
                      <br />

                      <p className="yellow-text text-darken-2 center">
                        {modifier.description}
                      </p>
                    </div>
                  ))}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col s8">
          <div>
            {prestige.order.map((activity, i) => (
              <div
                key={i}
                className="card hoverable medium blue-grey darken-4 col s4"
              >
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" alt="" src={activity.image} />
                </div>
                <div className="card-content blue-grey darken-4">
                  <span className="card-title activator">
                    <p className="yellow-text text-darken-2 center">
                      {activity.name}
                    </p>
                  </span>
                </div>
                <div className="card-reveal blue-grey darken-4">
                  <span className="card-title yellow-text text-darken-2 center">
                    {activity.name}
                  </span>
                  <iframe
                    title="activity-video"
                    width="336"
                    height="189"
                    src={`https://www.youtube.com/embed/${
                      activity.video.split('v=')[1]
                    }`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
            <div className="col s12 green">
              I can put some information about the final encounter and include
              the video to that as well
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
export default connect(mapStateToProps)(PvEInfo);
