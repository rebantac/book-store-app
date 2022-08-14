import React, { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import line from "../assets/line__.jpg";
import books from "../assets/Frame__3.png";
// import banner from "../assets/Frame8.png";
import b1 from "../assets/banner4.jpg";
import b2 from "../assets/banner5.jpg";
import StripeCheckout from "react-stripe-checkout";

const Rank1Book = ({ bestSeller }) => {
  const { book_image, author, title, rank, description } = bestSeller;
  const price = 39;
  const [product, setProduct] = useState({
    name: title,
    price: price,
    // productBy: publisher,
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
      <div>
        <img className="line" src={line} alt="Underline" />
        <br></br>
      </div>
      <h1 className="heading-2part">
        O U R <br></br> B E S T S E L L E R
      </h1>
      <Link to={`/book/${title}`}>
        <div className="row rank-1-sub">
          {/* {console.log(bestSeller)} */}

          <div class=" book2part center col-lg-6">
            {/* <div className='rank-1-desp'> */}
            <h1 className="number"># {rank}</h1>
            <br></br>
            {/* <div className="rank1_title">
            <p >{title}</p>
            <br></br>
            {author}
            </div> */}
            <br></br><p className="description_rank1">"{description}"</p><br></br>
            {/* <button type="button" className="part2_btn btn btn-dark btn-lg download btn1">Buy Now</button> */}
            <StripeCheckout
              stripeKey={process.env.REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY}
              token={makePayment}
              name={title}
              amount={price * 100}
              shippingAddress
              billingAddress
            >
              <button className="part2_btn btn btn-dark btn-lg download btn1">
                Buy Now at just $ {price}
              </button>
            </StripeCheckout>
          </div>

          <div className="rank-1-shadow center col-lg-6">
            <img
              className="rank-1"
              src={book_image}
              alt={title}
              loading="lazy"
            />
              <div className="rank1_title">
            <p >{title}</p>
            <br></br>
            {author}
            </div>
          </div>
        </div>

        {/* </div> */}
      </Link>
      <div className="flexing">
        <div class="row designing">
          <div class=" design_part center col-lg-6">
            {/* <h1 class="text">Meet new and interesting dogs nearby.</h1> */}

            <img className="design_img" src={books} alt="Throne" />

            {/* <button type="button" class="btn btn-dark btn-lg download"><i class="fa-brands fa-apple"></i>Download</button>
          <button type="button" class="btn btn-outline-light btn-lg download">
            <i class="fa-brands fa-google-play"></i>Download</button> */}
          </div>
          <div class=" design center col-lg-6">
            {/* <img className="line" src={line}  alt="Underline" /> */}
            {/* <h1 className='design_heading'>Best Collections of books from all genres</h1> */}

            <p className="design_text">
              {" "}
              <i class=" design_icon fa-solid fa-quote-left fa-3x"></i> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin id dolor
              non orci .
              <i class=" design_icon fa-solid fa-quote-right fa-3x"></i>
            </p>
            <div className="button_down">
              {/* <button type="button" class="btn btn-dark btn-lg download btn1"><i class="fa-brands fa-apple"></i>Download</button> */}
              <button
                type="button"
                class="btn btn-outline-light btn-lg download btn2"
              >
                <a href="#search">Search your book</a>
              </button>
            </div>
          </div>
        </div>
        {/* <img  className='b2' src={b2} alt={title} loading='lazy' /> */}
        {/* <div className='slider'> */}
        {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row ">
        <div class=" col-lg-6">
    <img  className='b2' src={b2} alt={title} loading='lazy' />
  </div>
  <div class="col-lg-6">
    <p>bkgkyfkuydkudukdtydtydktydkytdktcghckufkuycgcdukcu</p>
    </div>
    </div>
    </div>
    <div class="carousel-item">
    <img  className='b2' src={b1} alt={title} loading='lazy' />
    </div>
    <div class="carousel-item">
    <img  className='b2' src={b1} alt={title} loading='lazy' />
    </div>
  </div>
</div> */}
       <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="true"
        >
          <div class="carousel-inner">
            {/* <div class="carousel-item active"> */}
              {/* <div class="row">
                <div class=" center col-lg-6"> */}
                  <div class="carousel-item active" data-bs-interval="3000">
                  <div class="row">
                <div class="  center col-lg-6">
                    <img className="b1" src={b1} class="d-block b1" alt="..." />
                  </div>
                
                <div class=" c_para center col-lg-6">
                  <p> " id molestie sem. Phasellus neque neque, tempus vitae accumsan sed, pharetra ac turpis. Etiam pellentesque quam et sollicitudin cursus. Proin magna lacus, egestas a gravida sed, semper vestibulum lorem. Nunc cursus nibh ut lacus vestibulum dignissim. Vivamus feugiat porttitor imperdiet sollicitudin cursus. Proin magna lacus, egestas a gravida sed, semper vestibulum lorem."</p>
                  <p className="said">-Peter Colon</p>
                </div>
              </div>
             </div>
            {/* </div> */}
            
            {/* </div> */}
            <div class="carousel-item">
            <div class="row">
                <div class=" center col-lg-6">
                    <img className="b1" src={b2} class="d-block b1" alt="..." />
                  </div>
                
                <div class=" c_para center col-lg-6">
                  <p> " id molestie sem. Phasellus neque neque, tempus vitae accumsan sed, pharetra ac turpis. Etiam pellentesque quam et sollicitudin cursus. Proin magna lacus, egestas a gravida sed, semper vestibulum lorem. Nunc cursus nibh ut lacus vestibulum dignissim. Vivamus feugiat porttitor imperdiet." </p>
                  <p className="said">-Emily Watson</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <div class="row">
                <div class=" center col-lg-6">
                    <img className="b1" src={b1} class="d-block b1" alt="..." />
                  </div>
                
                <div class=" c_para center col-lg-6">
                  <p> " id molestie sem. Phasellus neque neque, tempus vitae accumsan sed, pharetra ac turpis. Etiam pellentesque quam et sollicitudin cursus. Proin magna lacus, egestas a gravida sed, semper vestibulum lorem. Nunc cursus nibh ut lacus vestibulum dignissim. Vivamus feugiat porttitor imperdiet sollicitudin cursus. Proin magna lacus, egestas a gravida sed, semper vestibulum lorem. Nunc csollicitudin cursus. Proin magna lacus, egestas a gravida sed, semper vestibulum lorem." </p>
                  <p className="said">-Scarlet Lee</p>
                </div>
              </div>
            </div>
            </div>
          
          {/* </div> */}
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      {/* <!-- <img class="burger" src="/img/burger.jpg" alt=""> --> */}
    
        {/* </div> */}
        {/* <div className='flexing'> */}

        <img className="line2" src={line} alt="Underline" />
        <h1 className="book-list">OUR COLLECTIONS</h1>
      </div>

      {/* </div> */}
    </>
  );
};

export default Rank1Book;
