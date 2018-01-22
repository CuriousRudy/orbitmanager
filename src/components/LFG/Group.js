import React from 'react';
import { connect } from 'react-redux';

class Group extends React.Component {
  render() {
    return (
      <div className="card col s3 sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            alt="a destiny pic"
            className="activator"
            src="https://res.cloudinary.com/teepublic/image/private/s--X6s0f4i0--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-158,y_-76/co_rgb:191919,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-158,y_-76/bo_45px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1476788483/production/designs/740979_1.jpg"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.group.game_mode}
          </span>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {this.props.group.game_mode}
          </span>
          <h5>{this.props.group.difficulty}</h5>
          <p>looking for: </p>
          <p>{this.props.group.party_size} players</p>
          <div>
            {this.props.group.fireteam.map(member => (
              <div className="chip">{member.gamertag}</div>
            ))}
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
export default connect(mapStateToProps)(Group);
