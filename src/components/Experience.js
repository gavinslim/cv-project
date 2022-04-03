import React, { Component } from 'react';
import Input from './Input';
// import Job from './Job';
import uniqid from 'uniqid';
import DisplayJobs from './Display';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.initJobClicked = this.initJobClicked.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      job: {
        title: '',
        employment: '',
        company: '', 
        location: '', 
        startDate: '',
        endDate: '',
        description: '',
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
  }

  // Save job 
  save = (e) => {
    e.preventDefault();
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

  close = (e) => {
    e.preventDefault();
    this.setState({
      active: false,
    })
  }

  // Delete job
  delete = (e) => {
    const index = this.state.jobs.findIndex((job) => job.id === e.currentTarget.id)
    this.setState(state => {
      const jobs = state.jobs.filter((job, num) => num !== index);

      return {
        jobs,
      }
    });
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
            <button className='close-btn' onClick={this.close}>x</button>
          </div>
          <Input label='Title' name='title' onChange={this.handleChange}></Input>
          <Input label='Employment Type' name='employment' onChange={this.handleChange}></Input>
          <Input label='Company name' name='company' onChange={this.handleChange}></Input>
          <Input label='Location' name='location' onChange={this.handleChange}></Input>
          <Input label='Start date' name='startDate' onChange={this.handleChange}></Input>
          <Input label='End date' name='endDate' onChange={this.handleChange}></Input>
          <Input label='Description' name='description' onChange={this.handleChange}></Input>
          <button type='submit' onClick={this.save}>Save</button>
        </div>
        <div id='overlay' className={this.state.active ? 'active': null}></div>
        { <DisplayJobs jobs={jobs} onClick={this.delete}/> }
      </div>
    )
  }
}

export default Experience;