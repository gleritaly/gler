import React, { useEffect } from 'react'
import "../Commercial/commercial.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
function Commercial() {

  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div style={{background:"white"}}>
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
    </div>
  )
}

export default Commercial
