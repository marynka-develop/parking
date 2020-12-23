import React from "react";

//Icons imports
import {FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn} from "react-icons/fa";

import './Footer.css';

function Footer() {
    return (


        <div className="site-footer ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">SmartParking.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                            to help the upcoming drivers with the Parking. Scanfcode focuses on providing the most
                            efficient way to find it or app provied the most simle way to do it. We will help
                            programmers
                            build up concepts in different programming languages that include HTML,
                            CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="#">Map</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Select Place</a></li>
                            <li><a href="#">Become a partner</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                            <a href="#">SmartParking</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><FaFacebookF size={25}/></a></li>
                            <li><a className="twitter" href="#"><FaTwitter size={25}/></a></li>
                            <li><a className="dribbble" href="#"><FaDribbble size={25}/></a></li>
                            <li><a className="linkedin" href="#"><FaLinkedinIn size={25}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
