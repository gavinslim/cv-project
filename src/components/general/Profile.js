import React, { Component } from 'react';
import profileUrl from '../../components/general/image/profile.jpeg';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img width='160' className='profile-pic' src={profileUrl} alt='profile'/>
    )
  }
}

export default Profile;