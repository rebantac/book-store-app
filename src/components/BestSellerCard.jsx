import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const bestSellerCard = ({ bestSeller }) => {
  const { book_image, author, title, rank } = bestSeller;

  return (
    <Box width='200px'>
      {/* {console.log(bestSeller)} */}
      <Link to={`/book/${title}`}>
        <Typography>
          Rank: {rank}
        </Typography>

        <img src={book_image} alt={title} loading='lazy' width='200px' height='270px' />

        <Typography mt='11px' pb='10px' flexWrap='wrap' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='12px'>
          {title}
        </Typography>

        <Typography mt='7px' pb='5px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='11px'>{author}</Typography>
      </Link>
    </Box>
  )
}

export default bestSellerCard