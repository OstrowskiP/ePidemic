import React, { Component } from 'react';
import { Link } from 'react-router';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        Przepraszamy, ta strona jest niedostępna. Wróć do&nbsp;
        <Link className='page-not-found-link' to='/'>strony głownej</Link>
      </div>
    )
  }
}

export default PageNotFound;
