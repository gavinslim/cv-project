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
      <div>
        <h1>General</h1>
        <General></General>
        <h1>Education</h1>
        <Education></Education>
        <h1>Experience</h1>
        <Experience></Experience>
      </div>
    )
  }
}

export default App;
