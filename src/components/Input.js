import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, name, value, type, onChange } = this.props;

    return (
      <div className='input'>
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} id={name} value={value} onChange={onChange} autoComplete="off">
        </input>
      </div>
    )
  }
}

export default Input;