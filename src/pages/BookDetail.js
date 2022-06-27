import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../components/Detail';
import { fetchData } from '../utils/fetchData';;

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchBooksData = async () => {
      let bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}&maxResults=1`;

      const bookDetailData = await fetchData(bookUrl);
      setBookDetail(bookDetailData.items[0]);
    }

    fetchBooksData()
  }, [id]);

  return (
    <Box>
      <Detail bookDetail={bookDetail}/>
    </Box>
  )
}

export default BookDetail