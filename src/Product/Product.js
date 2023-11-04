import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import Aos from 'aos'
// import 'aos/dist/aos.css'
import '../Product/product.css'

import Carousel4 from '../Carousel4/Carousel4';
import Footer from '../Footer/Footer';



const Product = () => {

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




  return (
    <div style={{ background: 'white' }}>

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
            <section className="pd" id='section-1'  data-aos="fade-up">
              <Carousel4 />
            </section>

            <section className="pd" id='section-2' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/7.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-3' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/8.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-4' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/9.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-5' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/11.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-6' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/12.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-7' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/13.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-8' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/14.jpg" className="img-fluid" alt="..." />
            </section>


            <section className="pd" id='section-9' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/15.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-10' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/16.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-11' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/17.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-12' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/18.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-13' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/19.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-14' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/20.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-15' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/21.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-16' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/22.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-17' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/23.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-18' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/24.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-19' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/25.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-20' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/26.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-21' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/27.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-22' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/28.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-23' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/29.jpg" className="img-fluid" alt="..." />
            </section>

            <section className="pd" id='section-24' data-aos="fade-right">
              <img src="https://gleritaly.sirv.com/gler/31.jpg" className="img-fluid" alt="..." />
            </section>
            <Footer /></>
      }


    </div>
  );
};

export default Product;
