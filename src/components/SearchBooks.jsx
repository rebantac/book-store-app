import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { fetchData } from '../utils/fetchData'

const SearchBooks = ({ setBooks, setShownyt, setBestSellers }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchBestSellers = async () => {
      setShownyt(true);

      let URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`

      const data = await fetchData(URL);
      let bestSellerBooks = data.results.books;

      setBestSellers(bestSellerBooks);
    }

    fetchBestSellers();
  }, []);
  

  const handleSearch = async () => {
    if (search) {
      setShownyt(false)
      let new_search = search.split(' ').join('+');
    
      let URL = `https://www.googleapis.com/books/v1/volumes?q=${new_search}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

      const data = await fetchData(URL);
      // console.log(data)

      let searchedBooks = data.items;

      setSearch('');
      setBooks(searchedBooks);
    } 
  }

  return (
    <Stack m='40px'>
      {/* <div className='collection'>
        Our <br/> Collections
      </div> */}

      {/* <Box m='40px'className='search_field'> */}
      <>
      <div className='searching'>
        <input className='text-line'
    
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Books'
          type='text' autoComplete='off'
        />

        <button className='button' onClick={handleSearch}>
        <i class="fa-solid fa-2x fa-magnifying-glass icon"></i>
        </button>
        </div>
        </>
      {/* </Box> */}
    </Stack>
  )
}

export default SearchBooks