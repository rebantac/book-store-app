import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchBooks from '../components/SearchBooks';
import Books from '../components/Books';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [bestSellers, setBestSellers] = useState([])  
  const [shownyt, setShownyt] = useState(true);

  return (
    <Box>
      <HeroBanner />

      <SearchBooks setBooks={setBooks} setShownyt={setShownyt} setBestSellers={setBestSellers} />

      <Books books={books} shownyt={shownyt} bestSellers={bestSellers} />
    </Box>
  )
}

export default Home