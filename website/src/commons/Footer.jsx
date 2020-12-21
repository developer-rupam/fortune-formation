import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}


    }







    render() {
        return (
            <Fragment>
                <section className="footer">
                    <div className="container">

                        <div className="row">
                            <div className="pay">
                                <figure><img src={require("../assets/images/pay.png")} /></figure>
                                <figcaption>
                                    <ul>
                                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href=""><i className="fab fa-twitter"></i></a></li>

                                        <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </figcaption>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-3 col-sm-12 wow fadeInUp">
                                <div className="se_fot">
                                    <h2>Formation Packages</h2>

                                    <ul>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Stater Pack </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Business Pack</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i>Corporate Pack</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> International Pack </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12 wow fadeInUp">

                                <div className="se_fot">
                                    <h2>Legal</h2>

                                    <ul>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Terms & Conditions </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Complaints</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Refund & Cancellation Policy</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> GDPR Privacy Policy </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Cookies Policy</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> ID Requirements </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> FAQ </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                            <div className="col-md-3 col-sm-12 wow fadeInUp">

                                <div className="se_fot">
                                    <h2>Useful Links</h2>

                                    <ul>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Home</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Price List</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Blog</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Contact Us</a>
                                        </li>

                                    </ul>

                                </div>

                            </div>

                            <div className="col-md-3 col-sm-12 wow fadeInUp">
                                <div className="se_fot">
                                    <h2>Office Service</h2>

                                    <ul>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Registered Office Services </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Business Mail - Scanned</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Business Mail - Forwarded</a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Official Mail - Forwarded </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> UK Post Box Service </a>
                                        </li>
                                        <li>
                                            <a href="#"> <i className="fas fa-arrow-right"></i> Telephone Services </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>


                        <div className="reg">
                            <div className="row">
                                <div className="col-md-7 col-sm-12">
                                    <figure><img src={require("../assets/images/logo2.png")} /></figure>
                                    <figcaption>

                                        <div className="liso">

                                            <ul>


                                                <li>Company Nr: 08261297 </li>
                                                <li>VAT Registration Nr: 165 8694 40</li>
                                            </ul>

                                        </div>
                                    </figcaption>

                                </div>

                                <div className="col-md-5 col-sm-12">

                                    <div className="service_link">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>Registered in  Covent Garden, London, WC2H 9JQ  </a> </li>
                                            <li><a href="#"><i className="far fa-envelope"></i>  admin@fortuneformations.com</a></li>
                                            <li><a href="#"><i className="fas fa-phone-volume"></i>  8697877282</a></li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                <div className="footer_2">
                    <p>Copyright 2019 © Fortune Formations</p>
                </div>
            </Fragment>
        )
    }

}

export default Footer;