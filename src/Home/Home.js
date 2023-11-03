import React, { useEffect } from 'react'
import "../Home/home.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


import Carousel from '../Carousel/Carousel'
import Carousel2 from '../Carousel2/Carousel2'
import Carousel3 from '../Carousel3/Carousel3'




const Home = () => {
  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleClickScroll = (sectionElement) => {
    console.log(sectionElement);

    let element = undefined

    if (sectionElement === "section-1") {
      element = document.getElementById('section-1');
    }
    else if (sectionElement === "section-2") {
      element = document.getElementById('section-2');
    }
    else {
      element = document.getElementById('section-3');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };





  return (
    <div className='gler'>
      <div className="buton">
        <button className="dot active" onClick={() => handleClickScroll("section-1")}>
        </button>
        <button className="dot" onClick={() => handleClickScroll("section-2")}>
        </button>
        <button className="dot" onClick={() => handleClickScroll("section-3")}>
        </button>
      </div>
      <section className='gler1' id='section-1'>
        <div className="tx1" data-aos="fade-up">
          <h1>Raffaello <br /> Series</h1>
        </div>
        <div className="tx2" data-aos="fade-up">
          <p>Raffaello Series CLA</p>
        </div>
        <div className="tx3" data-aos="fade-up">
          <p>Installation &nbsp;:&nbsp; Wall-Mounted/Recessed
            <br /> Power &nbsp;:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8000W
            <br />Voltage &nbsp;:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 250V
            <br />Current &nbsp;:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32A max
          </p>
        </div>
        <Carousel />
      </section>


      <section className='gler2' id='section-2'>
        <div className="ty1" data-aos="fade-right">
          <h1>Tiziano <br /> Series</h1>
        </div>
        <div className="ty2" data-aos="fade-right">
          <p> The unique temperament of the Titian <br /> series is graceful and
            soft, like the <br /> works of the painter Tiziano Vecell.</p>
        </div>
        <div className="ty3" data-aos="fade-right">
          <p>Tiziano Series CLA</p>
        </div>
        <div className="ty4" data-aos="fade-right">
          <p>Installation &nbsp;:&nbsp; Wall-Mounted/Recessed
            <br /> Power &nbsp;:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8000W
            <br />Voltage &nbsp;:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 250V
            <br />Current &nbsp;:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32A max
          </p>
        </div>
        <Carousel2 />
      </section>



      <section className='gler3' id='section-3'>
        <div className="tz1" data-aos="fade-up">
          <h1 >Power  Tracks</h1>
        </div>
        <div className="tz2" data-aos="fade-up">
          <p>Step into a realm where the most exquisite power tracks awaits your command</p>
        </div>
        <Carousel3 />
      </section>


      <div className="container1" style={{ display: 'flex' }} >
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
          <img src="https://gleritaly.sirv.com/gler/imgcard1.png" className="card__image" />
        </div>
      </div>

      <div className="container1">
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
          <img src="https://gleritaly.sirv.com/gler/imgcard2.png" className="card__image" />
        </div>
      </div>

      <div className="container1" style={{ display: 'flex' }}>
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
          <img src="https://gleritaly.sirv.com/gler/imgcard3.png" className="card__image" />
        </div>
      </div>

    </div>

  )
}
export default Home
