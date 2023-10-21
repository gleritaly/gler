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
        <div>
            <footer className="new_footer_area bg_color" data-aos="fade-up">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-right">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don’t miss any updates of our new design and products.!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                        <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6" >
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">About Us</h3>
                                    <ul className="list-unstyled f_list" style={{ textDecoration: 'none' }}>
                                        <li ><a style={{ textDecoration: 'none' }} href="/About" >Company</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="/Product">Products</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="/Product">Series</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="/Product">Variants</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Shop</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Coupons</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a style={{ textDecoration: 'none' }} href="#">FAQ</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Term &amp; conditions</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Reporting</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Documentation</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Support Policy</a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                    <h3 className="f-title f_600 t_color f_size_18 mt-4">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook"><BsFacebook/></a>
                                        <a href="#" className="fab fa-twitter"><FaTwitter/></a>
                                        <a href="https://instagram.com/gleritaly?igshid=OGQ5ZDc2ODk2ZA==" className="fab fa-linkedin"><BsInstagram/></a>
                                        <a href="https://www.linkedin.com/in/gler-italy-89a49628a?trk=contact-info" className="fab fa-pinterest"><BsLinkedin/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© Gler.. 2023 All rights reserved.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
