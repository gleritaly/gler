import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { AiFillPlusCircle } from 'react-icons/ai';
import Footer from '../Footer/Footer';

function Tiz() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
    , []);
  return (
    <div style={{ background: 'white' }}>
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
            <section className="raf">
              <div className="ra" data-aos="fade-up">
                <h3>Tiziano Series</h3>
                <p>  The unique temperament of the Titan series is graceful and
                  soft like the work of painter, Tiziano Vecell.</p>
              </div>

              <div className="container" >
                <div className="row" >

                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-right">
                      <div className="imgc"> < img src="https://gleritaly.sirv.com/gler/%E7%AC%AC28%E9%A1%B5-42.PNG" className="card-img-top" alt="..." /></div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Wall-mounted power tracks</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-right">
                      <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/%E7%AC%AC29%E9%A1%B5-43.PNG" className="card-img-top" alt="..." /></div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Wall-mounted power tracks</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-right">
                      <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/%E7%AC%AC28%E9%A1%B5-42.PNG" className="card-img-top" alt="..." /></div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Wall-mounted power tracks</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-right">
                      <div className="imgc" > <img src="https://gleritaly.sirv.com/gler/%E7%AC%AC29%E9%A1%B5-43.PNG" className="card-img-top" alt="..." /></div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Wall-mounted power tracks</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-up">

                      <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/79.png" className="card-img-top" alt="..." /></div>
                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Adapter socket with matt housing</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-up">
                      <div className="imgc">
                        <img src="https://gleritaly.sirv.com/gler/82.png" className="card-img-top" alt="..." />
                      </div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Adapter socket with matt housing</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc" data-aos="fade-up">
                      <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/87.png" className="card-img-top" alt="..." /></div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Adapter socket with matt housing</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                    <div className="cardc " data-aos="fade-up">
                      <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/90.png" className="card-img-top" alt="..." /></div>

                      <div className="card-body1">
                        <div className="hh">
                          <h4>Tiziano Series</h4>
                          <p>Adapter socket with matt housing</p>
                        </div>
                        <div className="hi">
                          <h5><button className='xx'>Buy Now</button></h5>

                          <li className='add-icon'> <AiFillPlusCircle /></li>
                        </div>
                      </div>
                    </div>
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

export default Tiz
