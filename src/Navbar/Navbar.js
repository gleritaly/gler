import React, { useEffect } from 'react'
import logo from "../image/logo.webp"
import "../Navbar/navbar.css"
import { Link } from 'react-router-dom'
import catalogue from"../catalogue/catalogue.pdf"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    // Close the Bootstrap Navbar when a link is clicked
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const navbar = document.querySelector(".navbar-collapse");
        if (navbar.classList.contains("show")) {
          navbar.classList.remove("show");
        }
      });
    });
  }, []);



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" data-aos="fade-down">

          <a className="navbar-brand" href="/" >
            <img src={logo} alt="Bootstrap" width="200" height="40" />
          </a>


         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-aos="fade-down">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Product">Product Series</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Adapter">Adapter Series</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page"  href={catalogue} download="catalogue.pdf">Catalogue</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Join">Join Now</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
