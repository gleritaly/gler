import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import "../Join/join.css"
import Footer from '../Footer/Footer'

function Join() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
    , []);

  return (
    <div className='join'>
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
            <div className="container8">
              <div className="content">
                <img src="https://gleritaly.sirv.com/gler/2.png" alt="header-image" className="cld-responsive" />
                <h1 className="form-title">Register Here</h1>
                <form>
                  <input type="text" placeholder="NAME" />
                  <div className="beside">
                    <input type="number" placeholder="PHONE NUMBER" />
                    <select>
                      <option>GENDER</option>
                      <option>MALE</option>
                      <option>FEMALE</option>
                      <option>NON-BINARY</option>
                    </select>
                  </div>
                  <input type="email" placeholder="EMAIL ADDRESS" />
                  <input type="number" placeholder="CODE" /><br />
                  <button className='but1' type="button">Submit</button>
                </form>
              </div>
            </div>
            <Footer />
          </>
      }

    </div>
  )
}

export default Join
