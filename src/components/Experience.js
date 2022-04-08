import React, { Component } from 'react';
import Input from './Input';
import uniqid from 'uniqid';
import DisplayJobs from './DisplayJobs';
import { OpenButton, CloseButton, SubmitButton } from './Button';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.change = this.change.bind(this);
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
      <div id='experience'>
        <div className='header-container'>
          <div className='header-title'>Experience</div>
          { <OpenButton click={this.open}/> }
        </div>
        <div className={this.state.active ? 'active form': 'form'}>
          <div className='form-header'>
            <div className='form-title'>Add experience</div>
            { <CloseButton click={this.close}/> }
          </div>
          <Input label='Title' name='title' onChange={this.change}></Input>
          <Input label='Employment Type' name='employment' onChange={this.change}></Input>
          <Input label='Company name' name='company' onChange={this.change}></Input>
          <Input label='Location' name='location' onChange={this.change}></Input>
          <Input label='Start date' name='startDate' onChange={this.change}></Input>
          <Input label='End date' name='endDate' onChange={this.change}></Input>
          <Input label='Description' name='description' onChange={this.change}></Input>
          <div className='form-footer'>
            { <SubmitButton click={this.save}/> }
          </div>
        </div>
        <div className={this.state.active ? 'overlay active': 'overlay'}></div>
        { <DisplayJobs jobs={jobs} onClick={this.delete}/> }
      </div>
    )
  }
}

export default Experience;