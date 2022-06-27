import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

const BookCard = ({ book, thumbnail, authors }) => {
  return (
    <Box width='200px'>
      <Link to={`/book/${book.volumeInfo.title}`}>
        <img src={thumbnail} alt={book.volumeInfo.title} loading='lazy' width='200px' height='270px' />

        <Typography mt='11px' pb='10px' flexWrap='wrap' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='12px'>
          {book.volumeInfo.title}
        </Typography>

        {authors.map((author) => (
          <Typography mt='7px' pb='5px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='11px'>{author}</Typography>
        ))}

      </Link>
    </Box>
  )
}

export default BookCard