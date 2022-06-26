import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

const BookCard = ({ index, book }) => {
  return (
    <Box width='200px'>
      <Link to={`/book/${book.book_id}`}>
        <img src={book.cover} alt={book.name} loading='lazy' width='100px' />

        <Typography mt='11px' pb='10px' flexWrap='wrap' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='12px'>
          {book.name}
        </Typography>

        {book.authors.map((author) => (
          <Typography mt='7px' pb='5px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='11px'>{author}</Typography>
        ))}

      </Link>
    </Box>
  )
}

export default BookCard