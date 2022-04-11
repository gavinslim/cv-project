import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import General from './components/general/General';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';

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
