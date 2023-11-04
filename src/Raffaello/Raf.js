import React, { useState, useEffect } from 'react'
import HashLoader from "react-spinners/HashLoader";
import "../Raffaello/raf.css"
import { AiFillPlusCircle } from 'react-icons/ai';
import Footer from '../Footer/Footer';

function Raf() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
      , []);
    return (
        <div style={{background:'white'}}>

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
                    <h3>Raffaello Series</h3>
                    <p> The Unique temperament of the Raphael series is serene,
                        harmonious, symmetrical, perfect and tranquil, like the works
                        of Raphael Sanzio.Raphael series is made of zirconium sand
                        oxidation technology, providing a skin like touch.</p>
                </div>

                <div className="container" >
                    <div className="row" >
                        
                    <div class="col-md-3 col-sm-6 col-xl-3 col-xxl-3">
                            <div className="cardc "  data-aos="fade-right">
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/POWER%20TRACKS.bip.538.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/POWER%20TRACKS.bip.536.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/POWER%20TRACKS.bip.537.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc" > <img src="https://gleritaly.sirv.com/gler/POWER%20TRACKS.bip.538.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/24.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/25.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/26.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
                                <div className="imgc"> <img src="https://gleritaly.sirv.com/gler/27.png" className="card-img-top" alt="..." /></div>
                               
                                <div className="card-body1">
                                    <div className="hh">
                                        <h4>Raffaello Series</h4>
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
            <Footer/>
           </>
}


        </div>
    )
}

export default Raf
