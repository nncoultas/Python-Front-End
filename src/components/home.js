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
      </div>
    );
  }
}

export default home;
