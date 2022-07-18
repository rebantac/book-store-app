import React, { useState } from 'react';
import { Typography, Stack, Button } from '@mui/material';
import { Interweave } from 'interweave';
import StripeCheckout from 'react-stripe-checkout';

const Detail = ({
  thumbnail,
  title,
  pageCount,
  language,
  authors,
  publisher,
  description,
  previewLink,
  price,
}) => {

  const [product, setProduct] = useState({
    name: title,
    price: price,
    productBy: publisher,
  });

  const makePayment = token => {
    const body = {
      token,
      product
    };

    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch(error => console.log(error));
  }

  return (
    <Stack>
      {/* {console.log(thumbnail)} */}
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
          Summary: <br />
          <Interweave content={description} />;
        </Typography>

        <Button >
          <a href={previewLink}> Preview Book </a>
        </Button>

        <StripeCheckout
          stripeKey={ process.env.REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY }
          token={makePayment}
          name={title}
          amount={price * 100}
          shippingAddress
          billingAddress
        >
          <button>
            Buy Now at just $ {price}
          </button>
        </StripeCheckout>

      </Stack>
    </Stack>
  )
}

export default Detail