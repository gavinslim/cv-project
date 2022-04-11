import React, { Component } from 'react';

class DisplayEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { educations, editEducation, deleteEducation } = this.props;
    return (
      <div className='educations'>
        {educations.map((education, i) => {
          return (
            <div className='education' key={i} id={education.id}>
              <div className='education-group'>
                <i className="fa-solid fa-building-columns education-icon"></i>
                <div className='education-details'>
                  <div id='school'>{education.school}</div>
                  <div id='degree'>{education.degree}, {education.study}</div>
                  <div id='startDate'>{education.startDate}</div>
                  <div id='endDate'>{education.endDate}</div>
                </div>
                <button id={education.id} className='edit-btn' onClick={editEducation}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button id={education.id} className='delete-btn' onClick={deleteEducation}>
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

export default DisplayEducation;