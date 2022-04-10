import React, { Component } from 'react';
import bannerUrl from '../../components/General/image/banner.jpeg';

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className='banner-pic' src={bannerUrl} alt='banner'/>
    )
  }
}

export default Banner;