import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


// import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
    <div className='top_navbar' id='search'
      // direction='row'
      // justifyContent='space-around'
      // sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      // px='20px'
    >
      {/* <Link to='/'>
        <img src={Logo} alt='logo' style={{ width: '30px', height: '30px', margin: '0 20px' }} />
      </Link> */}

      {/* <Stack direction='row' gap='40px'> */}
        <Link to='/' className='points'>Home </Link>

        <a href='#books'className='points'>Books </a>
        {/* <a href='#books'>Blogs &nbsp;|&nbsp;</a> */}
        <a href='#footer'className='points'>Contact Us</a>
      {/* </Stack> */}
    </div>
    {/* <div className='signup'>
           sign up to get 20% of premium <button className='btn'>signup</button>
    </div> */}
    {/* <div className='group-1'>
         <img className='cicle-img' src={circle} alt="" />
    </div> */}
    </>
  )
}

export default Navbar