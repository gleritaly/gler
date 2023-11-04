import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import "./productcase.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer'

const Productcase = () => {

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
    else if (sectionElement === "section-3") {
      element = document.getElementById('section-3');
    }
    else if (sectionElement === "section-4") {
      element = document.getElementById('section-4');
    }
    else {
      element = document.getElementById('section-5');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='container2'>

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
              <button className="dot" onClick={() => handleClickScroll("section-4")}>

              </button>
              <button className="dot" onClick={() => handleClickScroll("section-5")}>

              </button>
            </div>
            <section className="one " id='section-1'>
              <div className='t1' data-aos="fade-up">
                <h2>Kitchen</h2>
                <p>The design is more safe and scientific, and it is easy to use to increase the utilization of sockets in the kitchen.</p>
                <a href="/Kitchen/Kitchen" style={{ textDecoration: "none" }}>see more &gt;</a>
              </div>
              <img src="https://gleritaly.sirv.com/gler/cardy.jpg" className="img-fluid" alt="..." />
            </section>


            <section className="one " id='section-2'>
              <div className='t2' data-aos="fade-up">
                <h2>Office</h2>
                <p>Flexible and convenient, efficient and comfortable, the track length can be customized, and power can be obtained by inserting and rotating</p>
                <a href="/Office/Office" style={{ textDecoration: "none" }}>see more &gt;</a>
              </div>
              <img src="https://gleritaly.sirv.com/gler/office.png" className="img-fluid" alt="..." />
            </section>


            <section className="one " id='section-3'>
              <div className='t3' data-aos="fade-up">
                <h2>Commercial</h2>
                <p>The track load is 8000W, which is suitable for the use of high-power multiple electrical appliances. The modification can cover the original socket.</p>
                <a href="/Commercial/Commercial" style={{ textDecoration: "none" }}>see more &gt;</a>
              </div>
              <img src="https://gleritaly.sirv.com/gler/img2.png" className="img-fluid" alt="..." />
            </section>


            <section className="one " id='section-4'>
              <div className='t4' data-aos="fade-up">
                <h2>Laboratory</h2>
                <p>No need to repeatedly plug and unplug, rotate 90° to power on, rotate in the opposite direction and slide freely on the track after powering off.</p>
                <a href="/Laboratory/Laboratory" style={{ textDecoration: "none" }}>see more &gt;</a>
              </div>
              <img src="https://gleritaly.sirv.com/gler/lab.png" className="img-fluid" alt="..." />
            </section>

            <section className="one " id='section-5'>
              <div className='t5' data-aos="fade-up">
                <h2>Other</h2>
                <p>Internal safety structure prevents conductors from accidentally extending in and avoids the risk of electric shock</p>
                <a href="/Other/Other" style={{ textDecoration: "none" }}>see more &gt;</a>
              </div>
              <img src="https://gleritaly.sirv.com/gler/46.png" className="img-fluid" alt="..." />
            </section>
            <Footer />
          </>
      }

    </div>
  )
}

export default Productcase
