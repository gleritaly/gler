import React, { useEffect } from 'react'
import "../Other/other.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
function Other() {

  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div style={{background:"white"}}>
      <section className="kit5">
        <div className="tf" data-aos="fade-up">
          <h3>Other</h3>
          <p> Internal safety structure prevents conductors from accidentally extending in and avoids the risk of electric shock</p>
        </div>



        <div class="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-right">
          <div class="col ">
            <div class="card5" >
              <img src="https://gleritaly.sirv.com/gler/img21.png" class="card-img-top" alt="..." />
            </div>
          </div>

          <div class="col">
            <div class="card5">
              <img src="https://gleritaly.sirv.com/gler/cardy.jpg" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card5">
              <img src="https://gleritaly.sirv.com/gler/img25.png" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card5">
              <img src="https://gleritaly.sirv.com/gler/46.png" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card5">
              <img src="https://gleritaly.sirv.com/gler/POWER%20TRACK.bip.371.jpg" class="card-img-top" alt="..." />

            </div>
          </div>
            <div class="col">
            <div class="card5">
              <img src="https://gleritaly.sirv.com/gler/POWER%20TRACK.bip.346.png" class="card-img-top" alt="..." />

            </div>
          </div> 
        </div>
      </section>
    </div>
  )
}

export default Other
