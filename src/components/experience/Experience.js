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
    this.check = this.check.bind(this);
    this.calcDuration = this.calcDuration.bind(this);

    this.state = {
      job: {
        title: '',
        company: '', 
        location: '', 
        start: '',
        end: '',
        description: '',
        duration: '',
        id: uniqid()
      },
      jobs: [
        {
          title: 'Engineer II - Design',
          company: 'Microchip Technology Inc', 
          location: 'Burnaby, British Columbia, Canada', 
          start: '',
          end: '',
          description: '',
          duration: '',
          id: uniqid()
        },
        {
          title: 'Engineer I - Design',
          company: 'Microchip Technology Inc', 
          location: 'Burnaby, British Columbia, Canada', 
          start: '',
          end: '',
          description: '',
          duration: 'Jun 2019 - Nov 2021 · 2 yrs 5 mos',
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
    document.getElementById('start').value = job.start;
    document.getElementById('end').value = job.end;
    document.getElementById('description').value = job.description;

    // Set job with existing values
    this.setState({
      edit: true,
      jobIndex: index,
      job: {
        title: job.title,
        company: job.company, 
        location: job.location, 
        start: job.start,
        end: job.end,
        description: job.description,
        duration: job.duration,
        id: job.id,
      },
    })
  }

  // Reset job state
  reset = () => {
    document.getElementById('title').value = '';
    document.getElementById('company').value = '';
    document.getElementById('location').value = '';
    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
    document.getElementById('description').value = '';

    this.setState({
      job: {
        title: '',
        company: '', 
        location: '', 
        start: '',
        end: '',
        description: '',
        id: uniqid()
      },
    })

    // Clear placeholder fields in form
    document.getElementById('title').setAttribute('placeholder', '');
    document.getElementById('company').setAttribute('placeholder', '');
    document.getElementById('location').setAttribute('placeholder', '');
  }

  // Check that required inputs are not empty
  check = (e) => {
    const userInput = this.state.job;
    var output = true;

    // Check title field
    if (userInput.title === '') {
      document.getElementById('title').setAttribute('placeholder', 'Title is a required field');
      output = false;
    } else {
      document.getElementById('title').setAttribute('placeholder', '');
    };

    // Check company field
    if (userInput.company === '') {
      document.getElementById('company').setAttribute('placeholder', 'Company is a required field');
      output = false;
    } else {
      document.getElementById('company').setAttribute('placeholder', '');
    };

    // Check location field 
    if (userInput.location === '') {
      document.getElementById('location').setAttribute('placeholder', 'Location is a required field');
      output = false;
    } else {
      document.getElementById('location').setAttribute('placeholder', '');
    };

    // Check study field 
    if (userInput.start === '' || userInput.end === '') {
      output = false;
    } 

    return output;
  }

  // Calculate duration and update current job
  calcDuration = () => {
    const start = new Date(this.state.job.start);
    const end = new Date(this.state.job.end);

    const options = { month: 'short', year: 'numeric'};

    // const startDate = `${start.getMonth()} ${start.getFullYear()}`;
    const startDate = start.toLocaleString('default', options);
    const endDate = end.toLocaleString('default', options);

    const diff = new Date(end.getTime() - start.getTime())
    const years = diff.getUTCFullYear() - 1970;
    const months = diff.getUTCMonth();

    let job = this.state.job;
    job.duration = (years > 0) ? `${startDate} - ${endDate} · ${years} yrs ${months} mos` : `${startDate} - ${endDate} · ${months} mos`
  }

  // Save job 
  save = (e) => {
    e.preventDefault();

    // Check required fields
    if (!this.check(e)) return;

    this.calcDuration();

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
          start: '',
          end: '',
          description: '',
          duration: '',
          id: uniqid()
        },
        active: false,
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
          <span className='required'>* Indicates required</span>
          <Input label='Title*' name='title' onChange={this.change}></Input>
          <Input label='Company name*' name='company' onChange={this.change}></Input>
          <Input label='Location*' name='location' onChange={this.change}></Input>
          <Input label='Start date' name='start' type='date' onChange={this.change}></Input>
          <Input label='End date' name='end' type='date' onChange={this.change}></Input>
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