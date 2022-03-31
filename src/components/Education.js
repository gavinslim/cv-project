import React, { Component } from 'react';
import Input from './Input';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='education'>
        <Input label='School'></Input>
        <Input label='Degree'></Input>
        <Input label='Field of Study'></Input>
        <Input label='Start date'></Input>
        <Input label='End date (or expected)'></Input>
      </div>
    )
  }
}

export default Education;