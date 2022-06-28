import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

const Detail = ({ 
  thumbnail, 
  title, 
  pageCount, 
  language, 
  authors, 
  publisher, 
  description, 
  previewLink,
}) => {

  return (
    <Stack>    
      {console.log(thumbnail)}
      <img src={thumbnail} alt={title} width='250px' /> 

      <Stack>
        <Typography>
          {title}
        </Typography>

        <Typography>
          Pages: {pageCount}
        </Typography>

        <Typography>
          Language: {language}
        </Typography>

        {authors.map((author) => (
          <Typography textTransform='capitalize'>{author}</Typography>
        ))}

        <Typography>
          Publisher: {publisher}
        </Typography>

        <Typography>
          Summary: <br /> {description}
        </Typography>
        
        <Button >
          <a href={previewLink}> Preview Book </a>
        </Button>

      </Stack>
    </Stack>
  )
}

export default Detail