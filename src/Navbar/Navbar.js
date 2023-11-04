import React, { useEffect } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import catalogue from "../catalogue/catalogue.pdf"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart} from 'react-icons/ai'; 
import { CgProfile} from 'react-icons/cg'; 

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
            <img src="https://gleritaly.sirv.com/gler/logo.png" alt="Bootstrap" width="200" height="40" />
          </a>



          <button className="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-aos="fade-down">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Product">Product Center
                  <ul className="dropdown">
                    <li >
                      <Link to="/Raffaelo/Raf" > Raffaello Series</Link>
                    </li>
                    <li>
                      <Link to="/Tiziano/Tiz">Tiziano Series</Link>
                    </li>
                    <li>
                      <Link to="/Powertrack/Power">Power Tower</Link>
                    </li>
                  </ul>
                </Link>

              </li>




              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Productcase">Product Case
                  <ul className="dropdown">
                    <li>
                      <Link to="/Kitchen/Kitchen"> Kitchen</Link>
                    </li>
                    <li>
                      <Link to="/Office/Office">Office</Link>
                    </li>
                    <li>
                      <Link to="/Commercial/Commercial">Commercial</Link>
                    </li>
                    <li>
                      <Link to="/Laboratory/Laboratory">Laboratory</Link>
                    </li>
                    <li>
                      <Link to="/Other/Other">Other</Link>
                    </li>
                  </ul>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={catalogue} download="catalogue.pdf">Catalogue</a>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Join">Join Now</Link>
              </li>

              <ul className="icon">
                  <li><a href=""><AiOutlineShoppingCart/></a></li>
                  <li><a href=""><AiOutlineHeart/></a></li>
                  <li><a href=""><CgProfile/></a></li>
              </ul>
            </ul>
             
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
