import React, { useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import { Interweave } from "interweave";
import line from "../assets/line__.jpg";
import StripeCheckout from "react-stripe-checkout";

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

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* {console.log(thumbnail)} */}
      <div className="details">
        <div className="row">
          <div className=" detail-img center col-lg-6">
            <img details_pic src={thumbnail} alt={title} width="250px" />
          </div>
          <div class=" detail-text center col-lg-6">
            <div className="detail_part">
            <h2 className="title">{title}</h2>
            <br></br>
            <p className="page"> Pages: {pageCount}</p>
            <br></br>
            <p className="lang"> Language: {language}</p>
            <br></br>
            {authors.map((author) => (
              <p className="author"> Author : {author}</p>
            ))}
            <br></br>
            <p className="publish">Publisher: {publisher}</p>
            <p className="price_d">${price}</p>
            </div>
            <StripeCheckout
              stripeKey={process.env.REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY}
              token={makePayment}
              name={title}
              amount={price * 100}
              shippingAddress
              billingAddress
            >
              <button className="part2_btn btn btn-dark btn-lg download btn1">Buy Now</button>
            </StripeCheckout>
          </div>
        </div>
        <div className="line_img">
          <img className="line3" src={line} alt="Underline" />
        </div>
        <br />
        <h1 className="book-list">Summary</h1> <br />
        <Interweave content={description} />;
        <button
          type="button"
          class="btn btn-outline-light btn-lg download btn2 btn-details"
        >
          <a className="link_a" href={previewLink}>
            {" "}
            Preview Book{" "}
          </a>
        </button>
      </div>
    </>
  );
};

export default Detail;
