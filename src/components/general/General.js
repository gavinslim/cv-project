import React, { Component } from 'react';
import Input from '../Input';
import Banner from './Banner'
import Profile from './Profile';
import DisplayGeneral from './DisplayGeneral';
import uniqid from 'uniqid';
import { OpenButton, CloseButton, SubmitButton, EditButton } from '../Button';

class General extends Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);

    this.state = {
      generalInfo: {
        first: 'Gavin',
        last: 'Lim',
        headline: 'Engineer II - Design at Microchip Technology Inc.',
        country: 'Canada',
        postal: 'V5K',
        city: 'Vancouver, British Columbia',
      },
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

  change = (e) => {
    const value = e.target.value;
    this.setState({
      general: {
        ...this.state.general,
        [e.target.name]: value,
        id: uniqid(),
      }
    })
  }

  // Save and reset
  save = (e) => {
    e.preventDefault();
    this.setState({
      generalInfo: this.state.general,
      active: false,
    })
  }

  render() {
    const { generalInfo } = this.state;

    return (
      <div id='general'>
        { <Banner/> }
        <div className='header-container'>
          <div className='header-title'></div>
          { <EditButton click={this.edit} /> }
        </div>
        { <Profile/> }
        { <DisplayGeneral general={generalInfo}/> }

        <div className='header-buttons'>
          <button id='open-to-btn'>Open to</button>
          <button id='add-profile-btn'>Add profile section</button>
          <button id='more-btn'>More</button>
        </div>
        


        <div className={this.state.active ? 'form active' : 'form'}>
          <div className='form-header'>
            <div className='form-title'>Edit intro</div>
            { <CloseButton click={this.close}/> }
          </div>
          <Input label='First name' name='first' onChange={this.change}></Input>
          <Input label='Last name' name='last' onChange={this.change}></Input>
          <Input label='Headline' name='headline' onChange={this.change}></Input>
          <Input label='Country/Region' name='country' onChange={this.change}></Input>
          <Input label='Postal code' name='postal' onChange={this.change}></Input>
          <Input label='City' name='city' onChange={this.change}></Input>
          <div className='form-footer'>
            { <SubmitButton click={this.save} /> }
          </div>
        </div>
        <div className={this.state.active ? 'overlay active': 'overlay'}></div>
        
      </div>
    )
  }
}

export default General;