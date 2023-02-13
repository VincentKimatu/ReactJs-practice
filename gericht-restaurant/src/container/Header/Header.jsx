import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'>The key to Fine Dinning</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          velit illum minima quod adipisci veritatis, ullam sed deleniti
          accusantium culpa.{' '}
        </p>
        <button className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img' />
      </div>
    </div>
  );
};

export default Header;
