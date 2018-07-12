import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="logout" onClick={this.submitHandler}>
          Logout
        </Link>
        <Link to="/login" className="login">
          login
        </Link>
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

export default home;
