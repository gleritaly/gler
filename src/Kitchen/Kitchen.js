import React, { useEffect } from 'react'
import "../Kitchen/kitchen.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Kitchen() {

  // Creating a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div style={{background:"white"}}>

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

    </div>
  )
}

export default Kitchen
