import React from 'react'
import throne from '../assets/the-photography-of-game-of-thrones_game-of-thrones_silo_sm.png';
// import books from '../assets/Frame__3.png'
// import books from '../assets/new_book.jpg'
import books from '../assets/new_book2.jpg'
// import Library from '../assets/heroBanner.png';
import line from '../assets/line__.jpg';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import GitHubIcon from '@mui/icons-material/GitHub';

const HeroBanner = () => {
  return (
    <>
    <div className='banner_bg'>
      {/* <h1 className='heading'>Best Collections of books <br/>from all genres</h1> */}
    {/* <img className='banner_img' src={Library}  alt="library" />
    <div className='text_banner'><h1 className='text_h1'><span className='text_part'>Best co</span>llection <br/><span className='text_part'>of  boo</span>ks from <br/> <span className='text_part'>all gen</span>res</h1></div> */}
  <div class="row banner">
        <div class=" book1 center col-lg-6">
          {/* <h1 class="text">Meet new and interesting dogs nearby.</h1> */}
          
          <img className='banner_img' src={books}  alt="Throne" />

          {/* <button type="button" class="btn btn-dark btn-lg download"><i class="fa-brands fa-apple"></i>Download</button>
          <button type="button" class="btn btn-outline-light btn-lg download">
            <i class="fa-brands fa-google-play"></i>Download</button> */}
        </div>
        <div class=" book-text center col-lg-6">
        {/* <img className="line" src={line}  alt="Underline" /> */}
        <h1 className='heading'>Best Collections of books from all genres</h1>
       <p className='banner_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dolor non orci ultrices tincidunt. Donec suscipit tortor quis ex sodales, vel pretium diam finibus.
       </p> 
       <div className='buttons'>
       <button type="button" class="btn btn-dark btn-lg download btn1"><i class="fa-brands fa-apple"></i> Download</button>
       <button type="button" class="btn btn-outline-light btn-lg download btn2">
            <i class="fa-brands fa-google-play"></i> Download</button>
            </div>
        </div>
      </div>
    <div className='icons'>
    <i class="fa-brands fa-2x  fa-instagram side-icon">  </i>
    <i class="fa-brands fa-2x fa-pinterest side-icon"></i>
    <a href="https://github.com/rebantac/book-store-app"><i class="fa-brands fa-2x fa-github side-icon"></i></a>
    </div>
    {/* <InstagramIcon/>
    <PinterestIcon/>
    <GitHubIcon/> */}

    </div>
    </>
  )
}
// Best collection of books from all genres
export default HeroBanner