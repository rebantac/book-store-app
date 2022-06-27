import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData'

const SearchBooks = ({ setBooks }) => {
  const [search, setSearch] = useState('');
  // const [apiKey, setApiKey] = useState(process.env.GOOGLE_CLOUD_API_KEY)

  const handleSearch = async () => {
    if (search) {
      let new_search = search.split(' ').join('+');
    
      let URL = `https://www.googleapis.com/books/v1/volumes?q=${new_search}&key=${process.env.REACT_APP_GOOGLE_API_KEY}&maxResults=9`;

      const data = await fetchData(URL);
      // console.log(data)

      let searchedBooks = data.items;

      setSearch('');
      setBooks(searchedBooks);
    }
  }

  return (
    <Stack m='40px'>
      <Typography>
        Our <br /> Collections
      </Typography>

      <Box m='40px'>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Books'
          type='text' autoComplete='off'
        />

        <Button onClick={handleSearch}>
          Search
        </Button>

      </Box>
    </Stack>
  )
}

export default SearchBooks