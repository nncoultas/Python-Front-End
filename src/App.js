import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import YourNotes from './components/YourNotes';
import home from './components/home';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={home} />
        <Route path="/notes" component={YourNotes} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
