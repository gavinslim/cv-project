import React, { Component } from 'react';
import Input from '../Input';
import uniqid from 'uniqid';
import DisplayEducation from './DisplayEducation';
import { OpenButton, CloseButton, SubmitButton } from '../Button';

class Education extends Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.change = this.change.bind(this);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      education: {
        school: '',
        degree: '',
        study: '',
        start: '',
        end: '',
        id: uniqid()
      },
      educations: [
        {
          school: 'The University of British Columbia',
          degree: 'Bachelor of Applied Science - BASc',
          study: 'Electrical Engineering',
          start: '',
          end: '',
          id: uniqid()          
        }
      ],
      active: false,
      edit: false,
      educationIndex: '',
    }
  }

  open = () => {
    this.setState({
      active: true,
    })
  }

  change = (e) => {
    const value = e.target.value;
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: value,
        id: uniqid()
      },
    })
  }
  

  // Edit education
  edit = (e) => {
    const index = this.state.educations.findIndex((education) => education.id === e.currentTarget.id)
    const education = this.state.educations.find((education, num) => num === index);

    document.getElementById('school').value = education.school;
    document.getElementById('degree').value = education.degree;
    document.getElementById('study').value = education.study;
    document.getElementById('start').value = education.start;
    document.getElementById('end').value = education.end;

    // Set job with existing values
    this.setState({
      edit: true,
      educationIndex: index,
      education: {
        school: education.school,
        degree: education.degree, 
        study: education.study, 
        start: education.start,
        end: education.end,
        id: education.id,
      },
    })
  }

  // Reset job state
  reset = () => {
    document.getElementById('school').value = '';
    document.getElementById('degree').value = '';
    document.getElementById('study').value = '';

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

    // Clear placeholder fields in form
    document.getElementById('school').setAttribute('placeholder', '');
    document.getElementById('degree').setAttribute('placeholder', '');
    document.getElementById('study').setAttribute('placeholder', '');
  }

  // Check that required inputs are not empty
  check = (e) => {
    const userInput = this.state.education;
    var output = true;

    // Check school field
    if (userInput.school === '') {
      document.getElementById('school').setAttribute('placeholder', 'School is a required field');
      output = false;
    } else {
      document.getElementById('school').setAttribute('placeholder', '');
    };

    // Check degree field
    if (userInput.degree === '') {
      document.getElementById('degree').setAttribute('placeholder', 'Degree is a required field');
      output = false;
    } else {
      document.getElementById('degree').setAttribute('placeholder', '');
    };

    // Check study field 
    if (userInput.study === '') {
      document.getElementById('study').setAttribute('placeholder', 'Study is a required field');
      output = false;
    } else {
      document.getElementById('study').setAttribute('placeholder', '');
    };

    return output;
  }

  // Save education
  save = (e) => {
    e.preventDefault();

    // Check required field 
    if (!this.check(e)) return;

    // Save existing education
    if (this.state.edit) {
      const index = this.state.educationIndex;

      // Create new jobs with edited values
      this.setState(state => {
        const educations = state.educations.map((education, num) => {
          if (num === index) {
            return this.state.education;
          }
          return education;
        });

        return {
          educations,
        }
      });

      this.setState({
        edit: false,
      })

      // Reset education state
      this.reset();

    } else {
      this.setState({
        educations: this.state.educations.concat(this.state.education),
        education: {
          school: '',
          degree: '',
          study: '',
          startDate: '',
          endDate: '',
          id: uniqid()
        },
      })
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
    const index = this.state.educations.findIndex((education) => education.id === e.currentTarget.id)
    this.setState(state => {
      const educations = state.educations.filter((education, num) => num !== index);
      return {
        educations,
      }
    });
  }

  render() {
    const { educations, active, edit } = this.state;

    return (
      <div id='education'>
        <div className='header-container'>
          <div className='header-title'>Education</div>
          { <OpenButton click={this.open}/> }
        </div>
        <div className={active ? 'active form' : edit ? 'active form' : 'form'}>
          <div className='form-header'>
            <div className='form-title'>{edit ? 'Edit education' : 'Add education'}</div>
            { <CloseButton click={this.close}/>}
          </div>
          <Input label='School' name='school' onChange={this.change}></Input>
          <Input label='Degree' name='degree' onChange={this.change}></Input>
          <Input label='Field of Study' name='study' onChange={this.change}></Input>
          <Input label='Start date' name='start' onChange={this.change}></Input>
          <Input label='End date (or expected)' name='end' onChange={this.change}></Input>
          <div className='form-footer'>
            { <SubmitButton click={this.save}/> }
          </div>
        </div>
        <div className={active ? 'overlay active': edit ? 'overlay active' : 'overlay'}></div>
        { <DisplayEducation educations={educations} deleteEducation={this.delete} editEducation={this.edit}/>}
      </div>
    )
  }
}

export default Education;