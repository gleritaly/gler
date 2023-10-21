import React, { useEffect } from 'react'
import "../Home/home.css"
import {img1, img2, img3, imgcard1, imgcard2, imgcard3} from '../image/image.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Slide from '../Slide/Slide'
const Home = () => {
  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1 className='mainheading' data-aos="fade-up">WELCOME TO GLER</h1>
            <p className='extratxt' data-aos="fade-up">Presenting the Brand New Series of Adapter</p>
            <img src={img1} className="d-block w-100" alt="image1" />
          </div>
          <div className="carousel-item">
            <h1 className='mainheading' data-aos="fade-up">WELCOME TO GLER</h1>
            <p className='extratxt' data-aos="fade-up">Presenting the Brand New Series of Adapter</p>
            <img src={img2} className="d-block w-100" alt="image2" />
          </div>
          <div className="carousel-item">
            <h1 className='mainheading' data-aos="fade-up">WELCOME TO GLER</h1>
            <p className='extratxt' data-aos="fade-up">Presenting the Brand New Series of Adapter</p>
            <img src={img3} className="d-block w-100 " alt="image3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      

      <div className="container" style={{ display: 'flex' }} data-aos="fade-up">
        <div className="firstcard"></div>
        <div className="card w-100">
          <div className="card__body">
            <div className="card__content">
              <h2 className="card__title" >POWER TRACKS</h2>
              <p className="card__text">STEP INTO A REALM WHERE THE MOST EXQUISITE POWER TRACKS AWAITS YOUR COMMAND.
                POWERED BY INNOVATION. CRAFTED BY BRILLIANCE. </p>
              <p className="card__text2">
                TOUCHED BY SOPHISTICATION.
              </p>

            </div>
          </div>
          <img src={imgcard1} className="card__image" />
        </div>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="card w-100">
          <div className="card__body">
            <div className="card__content">
              <h2 className="card__title">
                ADAPTERS
              </h2>
              <p className="card__text">THE UNIQUE TEMPERAMENT OF RAFFAELLO AND TIZIANO SERIES. WITH VARIETY OF FEATURES </p>
              <p className="card__text2">
                TOUCHED BY SOPHISTICATION.
              </p>
            </div>
          </div>
          <img src={imgcard2} className="card__image" />
        </div>
      </div>
      <div className="container" style={{ display: 'flex' }} data-aos="fade-up">
        <div className="firstcard"></div>
        <div className="card w-100">
          <div className="card__body">
            <div className="card__content">
              <h2 className="card__title">POWER TRACKS</h2>
              <p className="card__text"> DIFFERENT DESIGNS AND VARIANTS FOR THE MOST ELEGANT LOOK.
                POWERED BY INNOVATION. CRAFTED BY BRILLIANCE. </p>
              <p className="card__text2">
                TOUCHED BY SOPHISTICATION.
              </p>
            </div>
          </div>
          <img src={imgcard3} className="card__image" />
        </div>
      </div>
      <div className="slide"> <Slide/></div>  
    </div>
  )
}
export default Home
