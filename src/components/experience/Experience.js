import React, { Component } from 'react';
import Input from '../Input';
import uniqid from 'uniqid';
import DisplayJobs from './DisplayJobs';
import { OpenButton, CloseButton, SubmitButton } from '../Button';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.change = this.change.bind(this);
    this.edit = this.edit.bind(this);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      job: {
        title: '',
        company: '', 
        location: '', 
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid()
      },
      jobs: [
        {
          title: 'Engineer II - Design',
          company: 'Microchip Technology Inc', 
          location: 'Burnaby, British Columbia, Canada', 
          startDate: '',
          endDate: '',
          description: '',
          id: uniqid()
        },
        {
          title: 'Engineer I - Design',
          company: 'Microchip Technology Inc', 
          location: 'Burnaby, British Columbia, Canada', 
          startDate: '',
          endDate: '',
          description: '',
          id: uniqid()
        }

      ],
      active: false,
      edit: false,
      jobIndex: '',
    }
  }

  // Activate new job overlay 
  open = () => {
    this.setState({
      active: true,
    })
  }

  // Handle changes to input
  change = (e) => {
    const value = e.target.value;
    this.setState({
      job: {
        ...this.state.job,
        [e.target.name]: value,
        id: this.state.job.id,
      }
    });
  }

  // Edit job
  edit = (e) => {
    const index = this.state.jobs.findIndex((job) => job.id === e.currentTarget.id)
    const job = this.state.jobs.find((job, num) => num === index);

    document.getElementById('title').value = job.title;
    document.getElementById('company').value = job.company;
    document.getElementById('location').value = job.location;
    document.getElementById('startDate').value = job.startDate;
    document.getElementById('endDate').value = job.endDate;
    document.getElementById('description').value = job.description;

    // Set job with existing values
    this.setState({
      edit: true,
      jobIndex: index,
      job: {
        title: job.title,
        company: job.company, 
        location: job.location, 
        startDate: job.startDate,
        endDate: job.endDate,
        description: job.description,
        id: job.id,
      },
    })
  }

  // Reset job state
  reset = () => {
    document.getElementById('title').value = '';
    document.getElementById('company').value = '';
    document.getElementById('location').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('description').value = '';

    this.setState({
      job: {
        title: '',
        company: '', 
        location: '', 
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid()
      },
    })
  }

  // Save job 
  save = (e) => {
    e.preventDefault();

    // Save existing job
    if (this.state.edit) {
      const index = this.state.jobIndex;
      
      // Create new jobs with edited values
      this.setState(state => {
        const jobs = state.jobs.map((job, num) => {
          if (num === index) {
            return this.state.job;
          }
          return job;
        });

        return {
          jobs,
        }
      });

      this.setState({
        edit: false,
      })

      // Reset job state
      this.reset();

    // Add new job
    } else {
      this.setState({
        jobs: this.state.jobs.concat(this.state.job),
        job: {
          title: '',
          company: '', 
          location: '', 
          startDate: '',
          endDate: '',
          description: '',
          id: uniqid()
        }
      });
    }
  }

  close = (e) => {
    e.preventDefault();
    this.setState({
      active: false,
      edit: false,
    })

    // Reset job state
    this.reset();
  }

  // Delete job
  delete = (e) => {
    console.log(e.currentTarget.id);
    const index = this.state.jobs.findIndex((job) => job.id === e.currentTarget.id)
    this.setState(state => {
      const jobs = state.jobs.filter((job, num) => num !== index);
      return {
        jobs,
      }
    });
  }

  render() {
    const { active, edit, jobs } = this.state;

    return (
      <div id='experience'>
        <div className='header-container'>
          <span className='header-title'>Experience</span>
          { <OpenButton click={this.open}/> }
        </div>
        <div className={active ? 'active form' : edit ? 'active form' : 'form'}>
          <div className='form-header'>
            <div className='form-title'>{edit ? 'Edit experience' : 'Add experience'}</div>
            { <CloseButton click={this.close}/> }
          </div>
          <Input label='Title' name='title' onChange={this.change}></Input>
          <Input label='Company name' name='company' onChange={this.change}></Input>
          <Input label='Location' name='location' onChange={this.change}></Input>
          <Input label='Start date' name='startDate' onChange={this.change}></Input>
          <Input label='End date' name='endDate' onChange={this.change}></Input>
          <Input label='Description' name='description' onChange={this.change}></Input>
          <div className='form-footer'>
            { <SubmitButton click={this.save}/> }
          </div>
        </div>

        <div className={active ? 'overlay active': edit ? 'overlay active' : 'overlay'}></div>
        { <DisplayJobs jobs={jobs} deleteJob={this.delete} editJob={this.edit}/> }
      </div>
    )
  }
}

export default Experience;