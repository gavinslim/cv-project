import React, { Component } from 'react';
import Input from './Input';
import { OpenButton, CloseButton, SubmitButton, EditButton } from './Button';

class General extends Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      general: {
        first: '',
        last: '',
        headline: '',
        country: '',
        postal: '',
        city: '',
      },
      active: false,
    }
  }

  edit = () => {
    this.setState({
      active: true,
    })
  }

  close = () => {
    this.setState({
      active: false,
    })
  }

  render() {
    return (
      <div id='general'>
        <div className='header-container'>
          <div className='header-title'>About</div>
          { <EditButton click={this.edit} /> }
        </div>

        <div className={this.state.active ? 'form active' : 'form'}>
          <div className='form-header'>
            <div className='form-title'>Edit intro</div>
            { <CloseButton click={this.close}/> }
          </div>
          <Input label='First name' name='first'></Input>
          <Input label='Last name' name='last'></Input>
          <Input label='Headline' name='headline'></Input>
          <Input label='Country/Region' name='country'></Input>
          <Input label='Postal code' name='postal'></Input>
          <Input label='City' name='city'></Input>
          <div classname='form-footer'>
            { <SubmitButton click={this.save} /> }
          </div>
        </div>
        <div className={this.state.active ? 'overlay active': 'overlay'}></div>

      </div>
    )
  }
}

export default General;