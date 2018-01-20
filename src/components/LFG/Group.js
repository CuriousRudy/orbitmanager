import React from 'react';
import { connect } from 'react-redux';

class Group extends React.Component {
  render() {
    return (
      <div class="col s12 m3">
        <div class="card">
          <div class="card-image">
            <img src="https://res.cloudinary.com/teepublic/image/private/s--X6s0f4i0--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-158,y_-76/co_rgb:191919,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-158,y_-76/bo_45px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1476788483/production/designs/740979_1.jpg" />
            <span class="card-title black">This is a group</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">join</i>
            </a>
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
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
