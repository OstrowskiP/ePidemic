import React, { Component } from 'react';
import { Link } from 'react-router';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        The page that you are trying to access does not exist. Please go back to&nbsp;
        <Link className='page-not-found-link' to='/'>Home Page</Link>
      </div>
    )
  }
}

export default PageNotFound;
