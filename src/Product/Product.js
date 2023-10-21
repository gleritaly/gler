import React, { useEffect } from 'react'
import Aos from 'aos'
// import 'aos/dist/aos.css'
import '../Product/product.css'
import Slidee from '../Slidee/Slidee'

import { imgbanner, img32, img34, img35, img36, img37, img4, img5, img6, card1, card2, card3 } from '../image/image.js'
const Product = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div>
      <div className="banner" data-aos="fade-up">
        <img src={imgbanner} className="img-fluid" alt="banner"></img>
      </div>
      <div className="best" data-aos="fade-up">
        <h1>BEST SELLER</h1>
      </div>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
        data-aos="fade-right"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ objectFit: "cover" }}>
            <img src={img32} class="d-block w-100" alt="..." />
          </div>
         
          <div class="carousel-item">
            <img src={img34} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="contain"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div
              class="card"
              style={{
                width: "100%",
                height: "390px",
                color: "white",
                fontSize: "13px",
              }}
              data-aos="fade-right"
            >
              <img src={img4} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  The Unique temperament of the Raphael series is serene,
                  harmonious, symmetrical, perfect and tranquil, like the works
                  of Raphael Sanzio.Raphael series is made of zirconium sand
                  oxidation technology, providing a skin like touch.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div
              class="card"
              style={{
                width: "100%",
                height: "390px",
                color: "white",
                fontSize: "13px",
              }}
              data-aos="fade-right"
            >
              <img src={img5} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  There are different variants available, providing the most
                  stunning designs.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div class="card" style={{ width: "100%", height: '390px', color: 'white', fontSize: '13px' }} data-aos="fade-right">
              <img src={img6} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  The unique temperament of the Titan series is graceful and
                  soft like the work of painter, Tiziano Vecell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="contain"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div
              class="card"
              style={{
                width: "100%",
                height: "390px",
                color: "white",
                fontSize: "13px",
              }}
              data-aos="fade-right"
            >
              <img src={img35} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  The unique temperament of the Titian series is graceful and
                  soft, like the works of the painter Tiziano Vecell.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div class="card" style={{ width: "100%", height: '390px', color: 'white', fontSize: '13px' }} data-aos="fade-right">
              <img src={img36} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  Say goodbye to the clutter and hassle! The Raffaelo Series
                  Adapter is here to simplify your life.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div class="card" style={{ width: "100%", height: '390px', color: 'white', fontSize: '13px' }} data-aos="fade-right" >
              <img src={img37} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  Embrace the artistry of your space with the Titian Series. Let
                  your home be a canvas of sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="contain"
        style={{ marginTop: "35px", marginBottom: "35px" }}
      >
        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div
              class="card"
              style={{
                width: "100%",
                height: "390px",
                color: "white",
                fontSize: "13px",
              }}
              data-aos="fade-right"
            >
              <img src={card1} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  The unique temperament of the Raffaello series is serene,
                  harmonious, symmetrical, perfect, and tranquil, much like the
                  works of Raphael Sanzio.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div class="card" style={{ width: "100%", height: '390px', color: 'white', fontSize: '13px' }} data-aos="fade-right">
              <img src={card2} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  The Raphael series is made with zirconium and oxidation
                  technology, providing a skin-like touch.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
            <div class="card" style={{ width: "100%", height: '390px', color: 'white', fontSize: '13px' }} data-aos="fade-right" >
              <img src={card3} class="card-img-top" alt="..." />
              <div
                class="card-body"
                style={{ backgroundColor: "rgb(89, 85, 85)" }}
              >
                <p class="card-text">
                  The unique temperament of the Titian series is graceful and
                  soft, like the works of the painter Tiziano Vecell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="slidee" data-aos="fade-up" >
        <Slidee />
      </div>
    </div>
  );
};

export default Product;
