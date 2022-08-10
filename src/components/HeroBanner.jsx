import React from 'react'
import throne from '../assets/the-photography-of-game-of-thrones_game-of-thrones_silo_sm.png';
import books from '../assets/new_book2.jpg'

const HeroBanner = () => {
  return (
    <>
      <div className='banner_bg'>
        <div class="row banner">
          <div class=" book1 center col-lg-6">
            <img className='banner_img' src={books} alt="Throne" />
          </div>
          
          <div class=" book-text center col-lg-6">

            <h1 className='heading'>Best Collections of books from all genres</h1>
            <p className='banner_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dolor non orci ultrices tincidunt. Donec suscipit tortor quis ex sodales, vel pretium diam finibus.
            </p>
            <div className='buttons'>
              <button type="button" class="btn btn-dark btn-lg download btn1"><i class="fa-brands fa-apple"></i>Download</button>
              <button type="button" class="btn btn-outline-light btn-lg download btn2">
                <i class="fa-brands fa-google-play"></i>Download</button>
            </div>
          </div>
        </div>
        <div className='icons'>
          <i class="fa-brands fa-2x  fa-instagram side-icon">  </i>
          <i class="fa-brands fa-2x fa-pinterest side-icon"></i>
          <a href="https://github.com/rebantac/book-store-app"><i class="fa-brands fa-2x fa-github side-icon"></i></a>
        </div>


      </div>
    </>
  )
}
// Best collection of books from all genres
export default HeroBanner