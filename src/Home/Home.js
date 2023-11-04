import React, { useState, useEffect } from "react";
import "../Home/home.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


import Carousel from '../Carousel/Carousel'
import Carousel2 from '../Carousel2/Carousel2'
import Carousel3 from '../Carousel3/Carousel3'
import HashLoader from "react-spinners/HashLoader";
import Footer from "../Footer/Footer";



const Home = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
    , []);
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

      {
        loading ?
          <div className="loadder">
            <HashLoader

              color={"#d50606"}
              loading={loading}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"

            />
          </div>
          :
          <>
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
            <Footer />
          </>
      }


    </div>

  )
}
export default Home
