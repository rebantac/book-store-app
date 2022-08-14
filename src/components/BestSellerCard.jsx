import React from 'react';
import { Box, Link,  typography } from '@mui/material';


const bestSellerCard = ({ bestSeller }) => {
  const { book_image, author, title, rank ,description } = bestSeller;

  return (
    <>
     
      {/* {console.log(bestSeller)} */}
     
      <Link to={`/book/${title}`}>
      <div class="container">
  {/* <div class="row">
    <div class="center col-lg-4">
        */}
        <img className='book-img' src={book_image} alt={title} loading='lazy' />
       
        <p className='rank_one'>
          #{rank}
       </p>

      

        < p className='rank_title'>
          {title}
        </ p>
        
        {/* <div class="center col-lg-6"> */}
        < p className='rank_author' > {author}</ p>
        {/* </div> */}
        {/* </div>
        </div> */}
        {/* <h1>hiiii</h1> */}
        <span className='rank_desp' >
         {description}  
         </span>
       
        </div>
        {/* </div>
        </div> */}
      </Link>

    
       
      </>
  )
}

export default bestSellerCard