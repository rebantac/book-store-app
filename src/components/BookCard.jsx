import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const BookCard = ({ book, thumbnail, authors }) => {
  return (
    <div className='book_card'>
    <Box width='200px'>
      <Link to={`/book/${book.id}`}>
        <img className='card_img' src={thumbnail} alt={book.volumeInfo.title} loading='lazy' width='200px' height='270px' />

        <p className="card_para"  mt='11px' pb='10px' flexWrap='wrap' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='12px'>
          {book.volumeInfo.title}
        </p>

        {authors.map((author) => (
          <p className="card_para"  mt='7px' pb='5px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='11px'>{author}</p>
        ))}

      </Link>
    </Box>
    </div>
  )
}

export default BookCard