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
      {/* {console.log(books)} */}

      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
        {books.map((book, index) => {
          let thumbnail = '';
          let authors = [];
          if (book.volumeInfo.imageLinks) {
            thumbnail = book.volumeInfo.imageLinks.thumbnail;
          }
          if (book.volumeInfo.authors) {
            authors = book.volumeInfo.authors;
          }
          return (
            <BookCard authors={authors} thumbnail={thumbnail} book={book} />
          )
        })}
      </Stack>
    </Box>
  )
}

export default Books