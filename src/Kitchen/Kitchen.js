import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import "../Kitchen/kitchen.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer'

function Kitchen() {

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
    <div style={{ background: "white" }}>
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
            <section className="kit">
              <div className="tq" data-aos="fade-up">
                <h3>Kitchen</h3>
                <p> The design is more safe and scientific, and it is easy to use to increase the utilization of sockets in the kitchen.</p>
              </div>



              <div class="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-right">
                <div class="col ">
                  <div class="card1 " >
                    <img src="https://gleritaly.sirv.com/gler/18.png" class="card-img-top" alt="..." />
                  </div>
                </div>

                <div class="col">
                  <div class="card1">
                    <img src="https://gleritaly.sirv.com/gler/37.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card1">
                    <img src="https://gleritaly.sirv.com/gler/%E7%AC%AC37%E9%A1%B5-53.PNG" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card1">
                    <img src="https://gleritaly.sirv.com/gler/31.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card1">
                    <img src="https://gleritaly.sirv.com/gler/prd1.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card1">
                    <img src="https://gleritaly.sirv.com/gler/%E7%AC%AC52%E9%A1%B5-106.PNG" class="card-img-top" alt="..." />

                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </>
      }


    </div>
  )
}

export default Kitchen
