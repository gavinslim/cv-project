import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { label, name, value, onChange } = this.props;

    return (
      <div className='input'>
        <label htmlFor={name}>{label}</label>
        <input name={name} id={name} value={value} onChange={onChange}>
        </input>
      </div>
    )
  }
}

export default Input;