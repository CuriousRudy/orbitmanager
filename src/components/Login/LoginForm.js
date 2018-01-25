import React from 'react';
import { logUserIn } from '../../actions/index.js';
import { Input, Button, Slider, Slide } from 'react-materialize';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import '../../index.css';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  updateForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log('the form', this.props);
    return (
      <div className="row blue-grey lighten-2" style={{ height: '100vh' }}>
        <br />
        <br />
        <div className="col s12">
          <div className="col s1" />
          <div className="col s4">
            <div className="col s12 card hoverable blue-grey darken-2">
              <div className="card-content white-text">
                <span className="yellow-text text-darken-2 card-title">
                  Log In
                </span>
                <Input
                  s={12}
                  onChange={e => this.updateForm(e)}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  validate
                />
                <Input
                  s={12}
                  onChange={e => this.updateForm(e)}
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                />
                <br />
                <NavLink className="yellow-text text-darken-2" to="/signup">
                  Sign Up Here!
                </NavLink>
              </div>

              <div class="card-action">
                <Button
                  flat
                  large
                  className="yellow darken-2"
                  s={6}
                  onClick={() => {
                    this.props
                      .logUserIn(this.state.email, this.state.password)
                      .then(() => this.props.history.push('/dashboard'));
                  }}
                  waves="light"
                >
                  Login
                </Button>
              </div>
            </div>
            <div
              class="card col s12 blue-grey darken-1"
              style={{ display: 'none' }}
            >
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div id="login-slider" className="col s6" style={{ margin: '7px' }}>
            <Slider
              indicators={false}
              id="specialty"
              style={{ height: '500px' }}
            >
              <Slide src="https://www.hdwallpapers.in/download/destiny_2_game_4k-1600x900.jpg" />
              <Slide src="http://www.plaaayed.com/wp-content/uploads/2015/08/destiny-ttk.jpg" />
              <Slide src="https://static.giantbomb.com/uploads/original/0/39/2986078-1919-2.jpg" />
              <Slide src="https://i2.wp.com/www.destinycarrycorp.com/wp-content/uploads/2017/09/edz_public_event_04.jpg?fit=1920%2C1080&ssl=1" />
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps, { logUserIn })(LoginForm));
