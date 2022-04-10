import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import General from './components/General/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='content'>
        <Header></Header>
        <General></General>
        <Experience></Experience>
        <Education></Education>
      </div>
    )
  }
}

export default App;
