import React, { Component } from 'react';

class DisplayGeneral extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { general } = this.props;
    return (
      <div className='display-general'>
        <div id='name'> {general.first} {general.last} </div>
        <div id='headline'> {general.headline} </div>
        <div id='country'> {general.country} </div>
        <div id='postal'> {general.postal} </div>
        <div id='city'> {general.city} </div>
      </div>
    )
  }
}

export default DisplayGeneral;