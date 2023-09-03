import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Card3 = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="card3-bg-container">
      <h1 className="card3_heading">Our Destinations</h1>
      <div className="card3-container">
        <Slider {...settings}>
          <div className="carousel_card">
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1693715494/card-image_j3kgvk.png"
              alt="imgage"
              className="carousel-img"
            />
            <p className="university-name">Harward University</p>
            <div className="place-container">
              <p className="place">Cambridge,Mancheeshter,UK</p>
            </div>
          </div>
          <div className="carousel_card">
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1693715640/card-image-1_lf4gjw.png"
              alt="imgage"
              className="carousel-img"
            />
            <p className="university-name">Oxford University</p>
            <div className="place-container">
              <p className="place">Cambridge,Mancheeshter,UK</p>
            </div>
          </div>
          <div className="carousel_card">
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1693715847/card-image-2_crawuy.png"
              alt="imgage"
              className="carousel-img"
            />
            <p className="university-name">Standford University</p>
            <div className="place-container">
              <p className="place">Cambridge,Mancheeshter,UK</p>
            </div>
          </div>
          <div className="carousel_card">
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1693716059/card-image-3_c05czc.png"
              alt="imgage"
              className="carousel-img"
            />
            <p className="university-name">Nanyang University</p>
            <div className="place-container">
              <p className="place">Cambridge,Mancheeshter,UK</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Card3
