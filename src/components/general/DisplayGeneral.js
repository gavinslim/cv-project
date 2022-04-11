import React, { Component } from 'react';

class DisplayGeneral extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { general } = this.props;
    return (
      <div className='display-general'>
        <div id='general-name'> {general.first} {general.last} </div>
        <div id='general-headline'> {general.headline} </div>
        <div id='general-location'> {general.city}, {general.country} </div>
      </div>
    )
  }
}

export default DisplayGeneral;