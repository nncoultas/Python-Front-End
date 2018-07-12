import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index';

class home extends Component {
  render() {
    return (
      <div>
        <header className="background">
          <h1 className="title">Click To View Your Notes</h1>
        </header>
        <Link to="/notes" className="notesLink">
          View Your Notes
        </Link>
        {this.props.authenticated ? (
          <Link to="/" className="logout" onClick={this.submitHandler}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="login">
            login
          </Link>
        )}
        <Link to="/signup" className="signup">
          {' '}
          Sign Up{' '}
        </Link>
      </div>
    );
  }
  submitHandler = () => {
    this.props.logout();
  };
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(home);
