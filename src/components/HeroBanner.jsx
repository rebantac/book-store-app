import React from 'react'
// import Library from '../assets/baner2.jpg';
import Library from '../assets/heroBanner.png';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import GitHubIcon from '@mui/icons-material/GitHub';

const HeroBanner = () => {
  return (
    <>
    <div className='banner_bg'>
    <img className='banner_img' src={Library}  alt="library" />
    <div className='text_banner'><h1 className='text_h1'><span className='text_part'>Best co</span>llection <br/><span className='text_part'>of  boo</span>ks from <br/> <span className='text_part'>all gen</span>res</h1></div>
    <div className='icons'>
    <i class="fa-brands fa-2x  fa-instagram side-icon"></i>
    <i class="fa-brands fa-2x fa-pinterest side-icon"></i>
    <i class="fa-brands fa-2x fa-github side-icon"></i>
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