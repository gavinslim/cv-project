import React, { Component } from 'react';
import Input from './Input';
import uniqid from 'uniqid';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        title: this.props.title,
        employment: this.props.employment,
        company: this.props.company, 
        location: this.props.location, 
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        description: this.props.description,
        id: uniqid()
      }
    }
  }

  render() {
    const { job } = this.state;

    return (
      <div>
        <Input label='Title' value={job.title}></Input>
        <Input label='Employment Type' value={job.employment}></Input>
        <Input label='Company name' value={job.company}></Input>
        <Input label='Location' value={job.location}></Input>
        <Input label='Start date' value={job.startDate}></Input>
        <Input label='End date' value={job.endDate}></Input>
        <Input label='Description' value={job.description}></Input>
      </div>
    )
  }
}

export default Job;