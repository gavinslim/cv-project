import React, { Component } from 'react';
import Input from './Input';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='general'>
        <div className='header-container'>
          <div className='header-title'>About</div>
        </div>
        <Input label='Name'></Input>
        <Input label='Email'></Input>
        <Input label='Phone Number'></Input>
      </div>
    )
  }
}

export default General;