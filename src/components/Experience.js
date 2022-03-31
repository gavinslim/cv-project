import React, { Component } from 'react';
import Input from './Input';
import Job from './Job';
import uniqid from 'uniqid';
import Display from './Display';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.initJobClicked = this.initJobClicked.bind(this);
    this.saveJobClicked = this.saveJobClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.foo = this.foo.bind(this);

    this.state = {
      job: {
        title: '',
        employment: '',
        company: this.props.company, 
        location: this.props.location, 
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        description: this.props.description,
        id: uniqid()
      },
      jobs: [],
      active: false,
    }
  }

  // Activate new job overlay 
  initJobClicked = () => {
    this.setState({
      active: true,
    })
  }

  // Handle changes to input
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      job: {
        ...this.state.job,
        [e.target.name]: value,
        id: this.state.job.id,
      }
    });
    // console.log(e.target.name, e.target.value);
  }

  // Save job 
  saveJobClicked = (e) => {
    e.preventDefault();
    console.log(this.state.job);
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        title: '',
        employment: '',
        company: '', 
        location: '', 
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid()
      }
    });
  }

  foo = (e) => {
    this.setState({
      active: false,
    })
    console.log('hello');
  }

  render() {
    const { jobs } = this.state;

    return (
      <div className='experience'>
        <div id='experience-header'>
          <div className='header'>Experience</div>
          <button onClick={this.initJobClicked}>+</button>
        </div>
        <div id='experience-form' className={this.state.active ? 'active': null}>
          <div className='form-header'>
            <div className='form-title'>Add experience</div>
            <button onClick={this.foo}>x</button>
          </div>
          <Input label='Title' name='title' onChange={this.handleChange}></Input>
          <Input label='Employment Type' name='employment' onChange={this.handleChange}></Input>
          <Input label='Company name' name='company' onChange={this.handleChange}></Input>
          <Input label='Location' name='location' onChange={this.handleChange}></Input>
          <Input label='Start date' name='startDate' onChange={this.handleChange}></Input>
          <Input label='End date' name='endDate' onChange={this.handleChange}></Input>
          <Input label='Description' name='description' onChange={this.handleChange}></Input>
          <button type='submit' onClick={this.saveJobClicked}>Save</button>
        </div>
        <div id='experience-overlay' className={this.state.active ? 'active': null}></div>
        { <Display jobs={jobs}/> }
      </div>
    )
  }
}

export default Experience;