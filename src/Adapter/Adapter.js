import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "../Adapter/adapter.css"
import {adp1} from '../image/image.js'
const Adapter = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <h1 className='comingsoon' >COMING SOON</h1>
      
      <img src={adp1} class="img-fluid" alt="..." data-aos="fade-right"></img>
    </div>
  )
}

export default Adapter
