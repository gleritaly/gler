import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import "../Commercial/commercial.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer'
function Commercial() {
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
            <section className="kit3" >
              <div className="ty" data-aos="fade-up">
                <h3>Commercial</h3>
                <p> The track load is 8000W, which is suitable for the use of high-power multiple electrical appliances. The modification can cover the original socket.</p>
              </div>



              <div class="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-right">
                <div class="col ">
                  <div class="card3 " >
                    <img src="https://gleritaly.sirv.com/gler/37.png" class="card-img-top" alt="..." />
                  </div>
                </div>

                <div class="col">
                  <div class="card3">
                    <img src="https://gleritaly.sirv.com/gler/18.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card3">
                    <img src="https://gleritaly.sirv.com/gler/tseries2.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card3">
                    <img src="https://gleritaly.sirv.com/gler/prd3.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card3">
                    <img src="https://gleritaly.sirv.com/gler/p1.png" class="card-img-top" alt="..." />

                  </div>
                </div>
                <div class="col">
                  <div class="card3">
                    <img src="https://gleritaly.sirv.com/gler/img2.png" class="card-img-top" alt="..." />

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

export default Commercial
