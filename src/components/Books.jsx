import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import BookCard from './BookCard';
import BestSellerCard from './BestSellerCard';

const Books = ({ books, shownyt, bestSellers }) => {
  const handleBooks = () => {
    if (shownyt === false) {
      return (
        <>
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
        </>
      )
    } else if (shownyt === true) {
      // console.log(bestSellers)
      return (
        <>
          <Typography>
            The New York Times Best Sellers
          </Typography>

          <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
            {bestSellers.map((bestSeller, index) => {
              return (
                <BestSellerCard bestSeller={bestSeller} />
              )
            })}
          </Stack>
        </>
      )
    }
  }

  return (
    <Box id='books'>
      {handleBooks()}
    </Box>
  )
}

export default Books