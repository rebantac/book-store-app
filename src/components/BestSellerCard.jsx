import React from 'react';
import { Box, Link, typography } from '@mui/material';


const bestSellerCard = ({ bestSeller }) => {
  const { book_image, author, title, rank } = bestSeller;

  return (
    <>

      {/* {console.log(bestSeller)} */}

      <Link to={`/book/${title}`}>
        <div class="container">
          <img className='book-img' src={book_image} alt={title} loading='lazy' />
          <p className='rank'>
            Rank: {rank}
          </p>

          <p className='rank_title'>
            {title}
          </p>

          <p className='rank_author' >{author}</p>
          
        </div>
      </Link>

    </>
  )
}

export default bestSellerCard