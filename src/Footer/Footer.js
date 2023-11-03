import React, { useEffect } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

import "../Footer/footer.css"

import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    // Creating a react hook to add a scroll animation....

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >
            <footer className="site-footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6" data-aos="fade-up">
                           <a style={{ textDecoration: 'none' }}  href="/About"><h6>About Us</h6></a> 
                            <p className="text-justify">GLER is determined to rise as the unparalleled pioneer of
                                precision and innovation, wielding a transformative force that
                                sparks progress and unveils uncharted horizons. Our unwavering
                                dedication propels us toward a radiant era, where we redefine
                                the energy industry with sophisticated and ground-breaking
                                solutions. We are commited to create safe, secure
                                environments, spreading energy and possibilities everywhere,
                                where limitations no longer hold us back, and life feels like
                                a treasure chest of opportunities.</p>
                        </div>

                        <div className="col-xs-6 col-md-3" data-aos="fade-up">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                                <li><a style={{ textDecoration: 'none' }} href="/Product">Product Center</a></li>
                                <li><a  style={{ textDecoration: 'none' }} href="/Raffaello/Raffaello">Raffaello Series</a></li>
                                <li><a style={{ textDecoration: 'none' }}  href="/Tiziano/Tiziano">Tiziaon Series</a></li>
                                <li><a style={{ textDecoration: 'none' }}  href="/Power/Power">Power Tracks</a></li>

                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3" data-aos="fade-up">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a  style={{ textDecoration: 'none' }} href="/About">About Us</a></li>
                                <li><a style={{ textDecoration: 'none' }}  href="/Contact">Contact Us</a></li>
                                <li><a  style={{ textDecoration: 'none' }} href="/Privacy">Privacy Policy</a></li>
                                <li><a  style={{ textDecoration: 'none' }} href="">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by &nbsp;
                                <a style={{ textDecoration: 'none' }}  href="/">Gler</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12" >
                            <ul className="social-icons">
                                <li><a style={{ textDecoration: 'none' }}  className="facebook" href="#"><BsFacebook /></a></li>
                                <li><a  style={{ textDecoration: 'none' }} className="twitter" href="#"><FaTwitter /></a></li>
                                <li><a  style={{ textDecoration: 'none' }} className="insta" href="https://instagram.com/gleritaly?igshid=OGQ5ZDc2ODk2ZA=="><BsInstagram /></a></li>
                                <li><a  style={{ textDecoration: 'none' }} className="linkedin" href="https://www.linkedin.com/in/gler-italy-89a49628a?trk=contact-info"><BsLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
