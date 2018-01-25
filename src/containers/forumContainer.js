import React from 'react';
// import MemberList from '../components/memberList';
import ForumMessages from '../components/Forum/ForumMessages';
import ForumList from './ForumList';
import { fetchForums, createMessage, createForum } from '../actions/index.js';
import { connect } from 'react-redux';
// import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import '../index.css';

class ForumContainer extends React.Component {
  state = {
    content: '',
    title: ''
  };

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      this.props.fetchForums();
    } else {
      this.props.history.push('/login');
    }
  };

  updateForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    // const forums = forums.map(forum => {
    // return <ForumLink />
    // })
    return (
      <div
        className="blue-grey lighten-2"
        style={{ height: '100vh', width: '100%' }}
      >
        <div>
          <ForumList />
        </div>

        <div className="row">
          <div className="col s1" />
          <div className="col s12 l3">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title  yellow-text text-darken-2">
                  Forum Topic
                </span>
                <p className="white-text text-darken-2">
                  Keep it short, keep it respectful.
                </p>
              </div>
            </div>
            <div className="card hoverable blue-grey darken-2 yellow-text text-darken-2">
              <div className="card-content white-text">
                <span className="card-title yellow-text text-darken-2">
                  Post a new message
                </span>

                <textarea
                  id="textarea1"
                  name="content"
                  className="materialize-textarea"
                  value={this.state.content}
                  onChange={e => this.updateForm(e)}
                />
                <label className="yellow-text text-darken-2" for="textarea1">
                  Type your message here:
                </label>
              </div>
              <div class="card-action blue-grey darken-2 yellow-text text-darken-2">
                <button
                  onClick={() => {
                    this.props.createMessage(
                      this.props.displayedForum,
                      this.state.content
                    );
                    this.setState({ content: '' });
                  }}
                  className="btn btn-flat yellow darken-2 waves-effect waves-dark"
                />
              </div>
            </div>

            <div class="card hoverable blue-grey darken-2">
              <div class="card-content white-text">
                <span class="card-title yellow-text text-darken-2">
                  Start a new thread
                </span>

                <input
                  type="text"
                  name="title"
                  onChange={e => this.updateForm(e)}
                  value={this.state.title}
                />
                <label className="yellow-text text-darken-2" for="title">
                  What is the topic?
                </label>
              </div>
              <div class="card-action">
                <button
                  onClick={() => {
                    this.props.createForum(this.state.title);
                    this.setState({ title: '' });
                  }}
                  className="btn btn-flat yellow darken-2 waves-effect waves-dark"
                />
              </div>
            </div>
          </div>
          <div className="col s12 l7">
            <div className={this.props.displayedForum ? 'messageSpace' : ''}>
              {this.props.displayedForum ? (
                <ForumMessages forumId={this.props.displayedForum} />
              ) : (
                <div style={{ borderTop: '15px' }}>
                  <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                      <div className="circle-clipper left">
                        <div className="circle" />
                      </div>
                      <div className="gap-patch">
                        <div className="circle" />
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle" />
                      </div>
                    </div>

                    <div className="spinner-layer spinner-red">
                      <div className="circle-clipper left">
                        <div className="circle" />
                      </div>
                      <div className="gap-patch">
                        <div className="circle" />
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle" />
                      </div>
                    </div>

                    <div className="spinner-layer spinner-yellow">
                      <div className="circle-clipper left">
                        <div className="circle" />
                      </div>
                      <div className="gap-patch">
                        <div className="circle" />
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle" />
                      </div>
                    </div>

                    <div className="spinner-layer spinner-green">
                      <div className="circle-clipper left">
                        <div className="circle" />
                      </div>
                      <div className="gap-patch">
                        <div className="circle" />
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  fetchForums,
  createMessage,
  createForum
})(ForumContainer);
