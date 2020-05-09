import React from 'react';
import Directory from '../../components/directory/deirectory.component'
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
      <Directory />
  </div>
);

export default HomePage;