import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const BookCard = ({ book, thumbnail, authors }) => {
  return (
    <div className='book_card'>
    <Box width='200px'>
      <Link to={`/book/${book.id}`}>
        <img className='card_img' src={thumbnail} alt={book.volumeInfo.title} loading='lazy'/>

        <p className="card_para"  >
          {book.volumeInfo.title}
        </p>

        {authors.map((author) => (
          <p className="card_para" >{author}</p>
        ))}

      </Link>
    </Box>
    </div>
  )
}

export default BookCard