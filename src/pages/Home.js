import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchBooks from '../components/SearchBooks';
import Books from '../components/Books';

const Home = () => {
  const [books, setBooks] = useState([]);

  return (
    <Box>
      <HeroBanner />

      <SearchBooks setBooks={setBooks} />

      <Books books={books} />
    </Box>
  )
}

export default Home