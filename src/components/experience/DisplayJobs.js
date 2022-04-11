import React, { Component } from 'react';

class DisplayJobs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { jobs, deleteJob, editJob } = this.props;
    return (
      <div className='experiences'>
        {jobs.map((job, i) => {
          return (
            <div className='job' key={i} id={job.id}>
              <div className='job-group'>
                <i className="fa-solid fa-briefcase job-icon"></i>
                <div className='job-details'>
                  <div id='title'>{job.title}</div>
                  <div id='company'>{job.company}</div>
                  <div id='location'>{job.location}</div>
                  <div id='startDate'>{job.startDate}</div>
                  <div id='endDate'>{job.endDate}</div>
                  <div id='description'>{job.description}</div>
                </div>
                <button id={job.id} className='edit-btn' onClick={editJob}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button id={job.id} className='delete-btn' onClick={deleteJob}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <hr className='horizontal-line'></hr>
            </div>
          )
        })}
      </div>
    )
  }
}

export default DisplayJobs;