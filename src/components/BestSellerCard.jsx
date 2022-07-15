import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const bestSellerCard = ({ bestSeller }) => {
  const { book_image, author, title, rank } = bestSeller;

  return (
    <>
 
      {/* {console.log(bestSeller)} */}
     
      <Link to={`/book/${title}`}>
      <div class="container">
  <div class="row">
    <div class="col">
        <Typography>
          Rank: {rank}
        </Typography>

      

        <Typography>
          {title}
        </Typography>
        </div>
        <div class="col">
        <Typography >{author}</Typography>
        <img src={book_image} alt={title} loading='lazy' />
        </div>
        </div>
        </div>
      </Link>
       
      </>
  )
}

export default bestSellerCard