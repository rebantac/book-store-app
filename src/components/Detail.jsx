import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

const Detail = ({ bookDetail }) => {

  return (
    <Stack>    
      {console.log(bookDetail)}

      <Stack>
        <Typography>
          {/* {bookDetail.volumeInfo.title} */}
        </Typography>


      </Stack>
    </Stack>
  )
}

export default Detail