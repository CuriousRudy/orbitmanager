import React from 'react';
// import { checkLoginStatus } from '../actions/index.js';
import { Slider, Slide } from 'react-materialize';
import NavBar from './Navbar';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Slider fullscreen={true}>
          <Slide
            src="http://www.stayontargetpodcast.com/wp-content/uploads/2017/10/Destiny2Leviathan.jpg"
            title="Welcome to OrbitManager"
            className="blue-grey darken-4"
          />
          <Slide
            src="https://nsx.np.dl.playstation.net/nsx/material/c/c836830fe9973067afb22b451d1d58840477023d-1081657.jpg"
            title="Left aligned Caption"
            placement="left"
          >
            Here's our small slogan.
          </Slide>
          <Slide
            src="http://www.co-optimus.com/images/upload/image/2014/destiny-ships-screen-02-ps4-us-07jul14.jpg"
            title="Clan Fireteam Manager"
            placement="right"
          >
            Schedule Raids and more...
          </Slide>
          <Slide
            src="https://i2.wp.com/www.destinycarrycorp.com/wp-content/uploads/2017/09/edz_public_event_04.jpg?fit=1920%2C1080&ssl=1"
            title="Something else interesting"
            placement="right"
          >
            Schedule Raids and more...
          </Slide>
        </Slider>
        <div className="container">
          <p>
            This will have some nice things for the game, check out how nice it
            will look! Maybe a cool photo! Maybe some User Story info.
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
