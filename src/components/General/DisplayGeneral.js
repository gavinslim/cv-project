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
        <div id='location'> {general.city}, {general.country} </div>
      </div>
    )
  }
}

export default DisplayGeneral;