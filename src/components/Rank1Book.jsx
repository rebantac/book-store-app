import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Rank1Book = ({ bestSeller }) => {
  const { book_image, author, title, rank, description } = bestSeller;

  return (
    <div className='rank-1-sub'>
       
    <Box width='1180px'>
      {/* {console.log(bestSeller)} */}
     
      <Link to={`/book/${title}`}>
      <div className='rank-1-desp'>
        <Typography>
          Rank: {rank}
        </Typography>

        <Typography >
          {title}
        </Typography>

        <Typography>{author}</Typography>

        <Typography>"{description}"</Typography>
        </div>
          <div className='rank-1-shadow'>
        <img  className='rank-1' src={book_image} alt={title} loading='lazy' />
       </div>    
      </Link>
     
    </Box>
    </div>
  )
}

export default Rank1Book