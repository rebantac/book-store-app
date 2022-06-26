import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import BookCard from './BookCard';

const Books = ({ books }) => {
  return (
    <Box id='books'>
      <Typography>
        Showing Results
      </Typography>

      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' }}} flexWrap='wrap' justifyContent='center'>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </Stack>
    </Box>
  )
}

export default Books