import React, { Component } from 'react';
import Input from './Input';
import uniqid from 'uniqid';
import DisplayEducation from './DisplayEducation';
const { OpenButton } = require('./Button');

class Education extends Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.change = this.change.bind(this);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      education: {
        school: '',
        degree: '',
        study: '',
        start: '',
        end: '',
        id: uniqid()
      },
      educations: [],
      active: false,
    }
  }

  open = () => {
    this.setState({
      active: true,
    })
  }

  change = (e) => {
    const value = e.target.value;
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: value,
        id: uniqid()
      },
    })
  }
  
  // Save and reset
  save = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        school: '',
        degree: '',
        study: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
    })
  }

  close = () => {
    this.setState({
      active: false,
    })
  }

  // Delete job
  delete = (e) => {
    const index = this.state.educations.findIndex((education) => education.id === e.currentTarget.id)
    this.setState(state => {
      const educations = state.educations.filter((education, num) => num !== index);
      return {
        educations,
      }
    });
  }

  render() {
    const { educations } = this.state;

    return (
      <div id='education'>
        <div className='header-container'>
          <div className='header-title'>Education</div>
          { <OpenButton click={this.open}/> }
        </div>
        <div className={this.state.active ? 'active form': 'form'}>
          <div className='form-header'>
            <div className='form-title'>Add education</div>
            <button className='close-btn' onClick={this.close}>x</button>
          </div>
          <Input label='School' name='school' onChange={this.change}></Input>
          <Input label='Degree' name='degree' onChange={this.change}></Input>
          <Input label='Field of Study' name='study' onChange={this.change}></Input>
          <Input label='Start date' name='startDate' onChange={this.change}></Input>
          <Input label='End date (or expected)' name='endDate' onChange={this.change}></Input>
          <button type='submit' onClick={this.save}>Save</button>
        </div>
        <div id='overlay' className={this.state.active ? 'active': null}></div>
        { <DisplayEducation educations={educations} onClick={this.delete}/>}
      </div>
    )
  }
}

export default Education;