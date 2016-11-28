import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <span className='footer-text'>© ePidemic</span>
          <span className='footer-spacer'>·</span>
          <Link className='footer-link' to='/'>Home</Link>
          <span className='footer-spacer'>·</span>
          <Link className='footer-link' to='/about'>O Nas</Link>
          <span className='footer-spacer'>·</span>
          <Link className='footer-link' to='/contact'>Kontakt</Link>
        </div>
      </div>
    )
  }
}

export default Footer;
