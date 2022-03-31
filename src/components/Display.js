import React, { Component } from 'react';

function Display(props){
  const { jobs } = props;
  console.log(jobs);
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div key={job.id}>
            <div>Title: {job.title}</div>
            <div>Employment: {job.employment}</div>
            <div>Company: {job.company}</div>
            <div>Location: {job.location}</div>
            <div>Start Date: {job.startDate}</div>
            <div>End Date: {job.endDate}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Display;