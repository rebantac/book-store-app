import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { bookOptions, fetchData } from '../utils/fetchData'

const SearchBooks = ({ setBooks }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if(search) {
      var new_search = search.split(' ').join('+');
      const searchedBooks = await fetchData(`https://hapi-books.p.rapidapi.com/search/${new_search}`, bookOptions);

      // console.log(searchedBooks);
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
          type='text'
        />

        <Button onClick={handleSearch}>
          Search
        </Button>

      </Box>
    </Stack>
  )
}

export default SearchBooks