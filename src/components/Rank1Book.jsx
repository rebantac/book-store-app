import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Rank1Book = ({ bestSeller }) => {
  const { book_image, author, title, rank, description } = bestSeller;

  return (
    <Box width='1180px'>
      {/* {console.log(bestSeller)} */}
      <Link to={`/book/${title}`}>
        <Typography>
          Rank: {rank}
        </Typography>

        <Typography mt='11px' pb='10px' flexWrap='wrap' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='12px'>
          {title}
        </Typography>

        <Typography mt='7px' pb='5px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='11px'>{author}</Typography>

        <Typography mt='7px' pb='5px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='11px'>"{description}"</Typography>

        <img src={book_image} alt={title} loading='lazy' width='200px' height='270px' />
      </Link>
    </Box>
  )
}

export default Rank1Book