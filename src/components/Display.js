import React, { Component } from 'react';

class DisplayJobs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { jobs, onClick } = this.props;
    return (
      <div className='experiences'>
        {jobs.map((job, i) => {
          return (
            <div className='job' key={i} id={job.id}>
              <div id='title'>Title: {job.title}</div>
              <div id='employment'>Employment: {job.employment}</div>
              <div id='company'>Company: {job.company}</div>
              <div id='location'>Location: {job.location}</div>
              <div id='startDate'>Start Date: {job.startDate}</div>
              <div id='endDate'>End Date: {job.endDate}</div>
              <button id={job.id} onClick={onClick}>X</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default DisplayJobs;