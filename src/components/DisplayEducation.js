import React, { Component } from 'react';

class DisplayEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educations, onClick } = this.props;
    return (
      <div className='experiences'>
        {educations.map((education, i) => {
          return (
            <div className='job' key={i} id={education.id}>
              <div id='school'>School: {education.school}</div>
              <div id='degree'>Degree: {education.degree}</div>
              <div id='study'>Study: {education.study}</div>
              <div id='startDate'>Start Date: {education.startDate}</div>
              <div id='endDate'>End Date: {education.endDate}</div>
              <button id={education.id} onClick={onClick}>X</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default DisplayEducation;