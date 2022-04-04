import './App.css';
import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='content'>
        <General></General>
        <Experience></Experience>
        <Education></Education>
      </div>
    )
  }
}

export default App;
