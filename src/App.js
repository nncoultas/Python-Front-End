import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import YourNotes from './components/YourNotes';
import home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={home} />
        <Route path="/notes" component={YourNotes} />
      </div>
    );
  }
}

export default App;
