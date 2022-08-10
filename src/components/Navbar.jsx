import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <div className='top_navbar' id='search'>
        <Link to='/' className='points'>Home </Link>

        <a href='#books' className='points'>Books </a>
        <a href='#footer' className='points'>Contact Us</a>

      </div>
    </>
  )
}

export default Navbar