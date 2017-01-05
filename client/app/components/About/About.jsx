import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (<div>
      <div className='about-container'>
        <div className='text-container'>
          <div className='title'>O Nas</div>
          <div className='content'>
            ePidemic to aplikacja, która w jednym miejscu
            gromadzi wszystkie informacje na temat zachorowań
            na świecie.
          </div>
          <div className='questions'>
            <div>Masz pytania?</div>
            <Link to='/contact'>Napisz do Nas...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
