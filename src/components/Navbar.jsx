import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{ width: '30px', height: '30px', margin: '0 20px' }} />
      </Link>

      <Stack direction='row' gap='40px'>
        <Link to='/' >Home</Link>

        <a href='#books'>Books</a>
      </Stack>
    </Stack>
  )
}

export default Navbar