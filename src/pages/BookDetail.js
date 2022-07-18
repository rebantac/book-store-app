import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Detail from '../components/Detail';
import { fetchData } from '../utils/fetchData';
import priceGen from '../utils/priceGen';

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const price = priceGen();

  const { id } = useParams();

  useEffect(() => {
    const fetchBooksData = async () => {
      let bookUrl = `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

      const bookDetailData = await fetchData(bookUrl);
      setBookDetail(bookDetailData);
      setLoading(false)
    }

    fetchBooksData()
  }, [id]);

  const handleCard = () => {
    if (loading) {
      return (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      );
    } else {
      let bookInfo = bookDetail.volumeInfo;
      return (
        <Detail
          thumbnail={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : ''}
          title={bookInfo.title}
          pageCount={bookInfo.pageCount}
          language={bookInfo.language}
          authors={bookInfo.authors ? bookInfo.authors : []}
          publisher={bookInfo.publisher}
          description={bookInfo.description}
          previewLink={bookInfo.previewLink}
          price={price}
        />
      );
    }
  };


  return (
    <Box>
      {handleCard()}
    </Box>
  )
}

export default BookDetail;