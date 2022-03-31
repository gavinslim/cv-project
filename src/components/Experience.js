import React, { Component } from 'react';
import Input from './Input';
// import Job from './Job';
import uniqid from 'uniqid';
import Display from './Display';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.initJobClicked = this.initJobClicked.bind(this);
    this.saveJobClicked = this.saveJobClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
    }
  }

  // Activate new job overlay 
  initJobClicked = () => {
    console.log('Activate');
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

  render() {
    const { jobs } = this.state;

    return (
      <div className='experience'>
        <button onClick={this.initJobClicked}>+</button>
        <form id='experience-form' onSubmit={this.saveJobClicked}>
          <Input label='Title' name='title' onChange={this.handleChange}></Input>
          <Input label='Employment' name='employment' onChange={this.handleChange}></Input>
          <Input label='Company' name='company' onChange={this.handleChange}></Input>
          <Input label='Location' name='location' onChange={this.handleChange}></Input>
          <Input label='Start date' name='startDate' onChange={this.handleChange}></Input>
          <Input label='End date' name='endDate' onChange={this.handleChange}></Input>
          <Input label='Description' name='description' onChange={this.handleChange}></Input>
          <button type='submit'>Save</button>
        </form>
        { <Display jobs={jobs}/> }
      </div>
    )
  }
}

export default Experience;