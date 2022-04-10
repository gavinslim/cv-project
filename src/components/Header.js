import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header id='top-header'>
        <div id='top-header-sub'>
          <i className="fa-brands fa-linkedin main-logo"></i>
          <div id='searchBar'>
            <ul className='nav-items'>
              <li className='primary-item'>
                <i className="fa-solid fa-house nav-icon"></i>
                <span>Home</span>
              </li>
              <li className='primary-item'>
                <i className="fa-solid fa-user-group nav-icon"></i>
                <span>My Network</span>
              </li>
              <li className='primary-item'>
                <i className="fa-solid fa-suitcase nav-icon"></i>
                <span>Jobs</span>
              </li>
              <li className='primary-item'>
                <i className="fa-solid fa-comment-dots nav-icon"></i>
                <span>Messaging</span>
              </li>
              <li className='primary-item'>
                <i className="fa-solid fa-bell nav-icon"></i>
                <span>Notification</span>
              </li>         
            </ul>
          </div>
        </div>

      </header>
    )
  }
}

export default Header;