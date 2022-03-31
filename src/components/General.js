import React, { Component } from 'react';
import Input from './Input';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='general'>
        <Input label='Name'></Input>
        <Input label='Email'></Input>
        <Input label='Phone Number'></Input>
      </div>
    )
  }
}

export default General;