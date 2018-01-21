import React from 'react';
import { connect } from 'react-redux';

class Group extends React.Component {
  render() {
    return (
      <div class="card col s3 sticky-action">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator"
            src="https://res.cloudinary.com/teepublic/image/private/s--X6s0f4i0--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-158,y_-76/co_rgb:191919,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-158,y_-76/bo_45px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1476788483/production/designs/740979_1.jpg"
          />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            Card Title
          </span>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title</span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
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
