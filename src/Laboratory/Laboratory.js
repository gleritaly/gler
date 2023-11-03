import React, { useEffect } from 'react'
import "../Laboratory/laboratory.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
function Laboratory() {

  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div style={{background:"white"}}>
       <section className="kit4">
        <div className="tc" data-aos="fade-up">
          <h3>Laboratory</h3>
          <p> No need to repeatedly plug and unplug, rotate 90° to power on, rotate in the opposite direction and slide freely on the track after powering off.</p>
        </div>



        <div class="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-right">
          <div class="col ">
            <div class="card4 " >
              <img src="https://gleritaly.sirv.com/gler/ISOMETRIC.696.png" class="card-img-top" alt="..." />
            </div>
          </div>

          <div class="col">
            <div class="card4">
              <img src="https://gleritaly.sirv.com/gler/POWER%20TRACK.bip.640.jpg" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card4">
              <img src="https://gleritaly.sirv.com/gler/32.png" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card4">
              <img src="https://gleritaly.sirv.com/gler/img18.png" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card4">
              <img src="https://gleritaly.sirv.com/gler/1.png" class="card-img-top" alt="..." />

            </div>
          </div>
            <div class="col">
            <div class="card4">
              <img src="https://gleritaly.sirv.com/gler/card2.webp" class="card-img-top" alt="..." />

            </div>
          </div> 
        </div>
      </section>
    </div>
  )
}

export default Laboratory
