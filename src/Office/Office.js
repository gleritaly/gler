import React, { useEffect } from 'react'
import "../Office/office.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
function Office() {

  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div style={{background:"white"}}>
       <section className="kit2">
        <div className="tt" data-aos="fade-up">
          <h3>Office</h3>
          <p> Flexible and convenient, efficient and comfortable, the track length can be customized, and power can be obtained by inserting and rotating</p>
        </div>



        <div class="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-right">
          <div class="col ">
            <div class="card2 " >
              <img src="https://gleritaly.sirv.com/gler/img20.png" class="card-img-top" alt="..." />
            </div>
          </div>

          <div class="col">
            <div class="card2">
              <img src="https://gleritaly.sirv.com/gler/img18.png" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card2">
              <img src="https://gleritaly.sirv.com/gler/POWER%20TRACK.bip.373.jpg" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card2">
              <img src="https://gleritaly.sirv.com/gler/prd3.png" class="card-img-top" alt="..." />

            </div>
          </div>
          <div class="col">
            <div class="card2">
              <img src="https://gleritaly.sirv.com/gler/POWER%20TRACK.bip.371.jpg" class="card-img-top" alt="..." />

            </div>
          </div>
            <div class="col">
            <div class="card2">
              <img src="https://gleritaly.sirv.com/gler/POWER%20TRACK.bip.353.jpg" class="card-img-top" alt="..." />

            </div>
          </div> 
        </div>
      </section>
    </div>
  )
}

export default Office
