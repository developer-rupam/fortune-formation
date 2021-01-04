import React, { Fragment } from 'react';
import Footer from '../commons/Footer';
import Header from '../commons/Header';
import banner2 from '../assets/images/banner2.jpg';
import com_bak from '../assets/images/com_bak.jpg'
import coures_bak from '../assets/images/coures_bak.jpg'
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { SITENAMEALIAS } from '../utils/config';
import { showToast, showConfirm, showHttpError } from '../utils/library'
import { FetchCompanyListByQuery } from '../utils/service';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
            companyExistingStatus: '',
            isCompanyExist: false,
        };

        /*** Initializing reference in input fileds ****/
        this.searchCompanyNameRef = React.createRef();
        

    }

    

    /*** Method defination for handling search query using Company House API  ****/
    handleSearchForCompanyName = (e) => {
        e.preventDefault();
        let query = this.searchCompanyNameRef.current.value;
        if (query !== '') {

            FetchCompanyListByQuery(query).then(function (res) {
                var response = res.data;
                if (response.items) {
                    let companysList = response.items
                    this.setState({ companyExistingStatus: 'Company name is available', isCompanyExist: false })
                    companysList.forEach((company) => {
                        if (query.toLowerCase() === company.title.toLowerCase()) {
                            console.log('if')
                            this.setState({ companyExistingStatus: 'Company name already exist,please try with another name', isCompanyExist: true })
                        }
                    })
                } else {

                }

            }.bind(this)).catch(function (err) {
                showHttpError(err)
            }.bind(this))
        }
    }


    componentDidMount() {


    }


    render() {
        return (
            <Fragment>
                <Header />
                {/*  <div id="myCarousel" className="carousel slide" style={{marginBottom:'350px'}}>

                    <div className="carousel-inner">
                        <div className="item">
                            <div className="fill" style={{ backgroundImage: "url(" + banner2 + ")" }}></div>

                        </div>
                        <div className="item active">
                            <div className="fill" style={{ backgroundImage: "url(http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg)" }}></div>

                        </div>
                        <div className="item">
                            <div className="fill" style={{ backgroundImage: "url('http://www.marchettidesign.net/demo/optimized-bootstrap/campus.jpg)" }}></div>

                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="icon-prev"></span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="icon-next"></span>
                    </a>

                </div> */}
                <Carousel showThumbs={false}>
                    <div>
                        <img className="fill" src={banner2} />
                    </div>
                    <div>
                        <img className="fill" src="http://www.marchettidesign.net/demo/optimized-bootstrap/campus.jpg" />
                    </div>
                    <div>
                        <img className="fill" src="http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg" />
                    </div>
                </Carousel>
                <section id="search" className="slideanim slide">
                    <div className="container">
                        <div className="col-md-8 col-sm-12 col-md-offset-2">
                            <div className="search_wrp">
                                <h1> Ready to form your Limited Company? </h1>
                                <p>Enter the proposed Company Name to check availability</p>

                                <form className="example" onSubmit={(e) => { this.handleSearchForCompanyName(e) }}>
                                    <input type="text" placeholder="Search.." name="search" ref={this.searchCompanyNameRef} />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                                {this.state.companyExistingStatus === '' && <p>{this.state.companyExistingStatus}</p>}
                                {!this.state.isCompanyExist && <p style={{ color: 'green' }}>{this.state.companyExistingStatus}</p>}
                                {this.state.isCompanyExist && <p style={{ color: 'red' }}>{this.state.companyExistingStatus}</p>}

                            </div>

                        </div>
                    </div>

                </section>

                <div id="pricing-tab" className="clear">
                    <div className="container">
                        <h2>Perfect Package </h2>
                        <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</h5>



                        <div className="col-md-3 col-sm-12">
                            <div className="whole">
                                <div className="type">
                                    <p>Starter </p>
                                </div>
                                <div className="plan">

                                    <div className="header">
                                        <span>£</span>29<sup>99</sup>
                                        <p className="month">per month</p>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>15 Email Accounts</li>
                                            <li>100GB Space</li>
                                            <li>1 Domain Name</li>
                                            <li>500GB Bandwidth</li>
                                        </ul>

                                    </div>

                                    <div className="price">
                                        <a href="starter.html" className="bottom"><p className="cart">More Info</p></a>
                                        <a href="#" className="bottom"><p className="cart">Buy Now</p></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="whole">
                                <div className="type standard">
                                    <p>Business </p>
                                </div>
                                <div className="plan">

                                    <div className="header">
                                        <span>£</span>38<sup>99</sup>
                                        <p className="month">per month</p>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>15 Email Accounts</li>
                                            <li>100GB Space</li>
                                            <li>1 Domain Name</li>
                                            <li>500GB Bandwidth</li>
                                        </ul>

                                    </div>

                                    <div className="price">
                                        <a href="business.html" className="bottom"><p className="cart">More Info</p></a>
                                        <a href="#" className="bottom"><p className="cart">Buy Now</p></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="whole">
                                <div className="type ultimate">
                                    <p>Corporate</p>
                                </div>
                                <div className="plan">

                                    <div className="header">
                                        <span>£</span>51<sup>99</sup>
                                        <p className="month">per month</p>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>15 Email Accounts</li>
                                            <li>100GB Space</li>
                                            <li>1 Domain Name</li>
                                            <li>500GB Bandwidth</li>
                                        </ul>

                                    </div>

                                    <div className="price">
                                        <a href="corporate.html" className="bottom"><p className="cart">More Info</p></a>
                                        <a href="#" className="bottom"><p className="cart">Buy Now</p></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="whole">
                                <div className="type neo">
                                    <p>International</p>
                                </div>
                                <div className="plan">

                                    <div className="header">
                                        <span>£</span>95<sup>99</sup>
                                        <p className="month">per month</p>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>15 Email Accounts</li>
                                            <li>100GB Space</li>
                                            <li>1 Domain Name</li>
                                            <li>500GB Bandwidth</li>
                                        </ul>

                                    </div>

                                    <div className="price">
                                        <a href="international.html" className="bottom"><p className="cart">More Info</p></a>
                                        <a href="#" className="bottom"><p className="cart">Buy Now</p></a>
                                    </div>
                                </div>
                            </div>

                        </div>







                    </div>
                </div>

                <section id="why_chose" style={{ backgroundImage: "url(" + com_bak + ")" }}>
                    <div className="container">

                        <h2> We make company formation easy</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/1.png")} /></figure>
                            <figcaption>
                                <h4>Choose a company name</h4>

                            </figcaption>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/2.png")} /></figure>
                            <figcaption>
                                <h4>Select your package</h4>

                            </figcaption>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/3.png")} /></figure>
                            <figcaption>
                                <h4>Checkout and pay</h4>

                            </figcaption>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/4.png")} /></figure>
                            <figcaption>
                                <h4>Complete your order</h4>

                            </figcaption>
                        </div>

                    </div>


                </section>



                <section id="product">
                    <div className="container">
                        <div className="row">
                            <h2>Recommended  Products</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">

                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li> Limited Company Formation</li>
                                            <li> £ 550</li>
                                        </ul>

                                    </div>
                                </a>
                            </div>

                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>Companies for Non UK Residents</li>
                                            <li> £ 1550</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>Registered Office</li>
                                            <li> £ 250</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>VAT Registration Service </li>
                                            <li> £ 300</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>Registered Office</li>
                                            <li> £ 550</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-12">


                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>Limited Company Formation</li>
                                            <li> £ 550</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>VAT Registration Service </li>
                                            <li> £ 550</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-12">

                                <a href="limited_com.html">
                                    <div className="product_list">
                                        <ul>
                                            <li><img src={require("../assets/images/ico1.png")} /></li>
                                            <li>Limited Company Formation</li>
                                            <li> £ 550</li>
                                        </ul>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="btp">
                            <a href="" className="btk">View More</a>
                        </div>

                    </div>
                </section>




                <section id="why_chose" style={{ backgroundImage: "url(" + coures_bak + ")" }}>
                    <div className="container">

                        <h2> Why Choose Us </h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/ico2.png")} /></figure>
                            <figcaption>
                                <h4>Fast Service</h4>
                                <h5> Most companies are formed within 3 working hours.</h5>
                            </figcaption>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/ico3.png")} /></figure>
                            <figcaption>
                                <h4>Transparent</h4>
                                <h5> No hidden charges and no price increases for renewals.</h5>
                            </figcaption>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/ico4.png")} /></figure>
                            <figcaption>
                                <h4>Fully Authorised</h4>
                                <h5>We are approved Companies House agents, forming over</h5>
                            </figcaption>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <figure><img src={require("../assets/images/ico5.png")} /></figure>
                            <figcaption>
                                <h4>Happy To Help You</h4>
                                <h5>No hard sell, we will help you find the best solution</h5>
                            </figcaption>
                        </div>

                    </div>

                </section>
                <section id="Client">
                    <div className="container">

                        <h2> Our Partners </h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>


                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            stagePadding={20}
                            autoplay={true}
                            stagePadding={20}
                            autoplayTimeout={2000}
                            nav={false}
                            dots={false}>
                            <div className="item"><img src={require("../assets/images/s1.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s2.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s3.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s4.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s5.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s6.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s1.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s2.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s3.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s4.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s5.png")} /></div>
                            <div className="item"><img src={require("../assets/images/s6.png")} /></div>
                        </OwlCarousel>
                    </div>
                </section>

                <section id="testimonial">

                    <h2> What Clients Say </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <div className="customer-feedback">
                        <div className="container text-center">

                            <div className="row">
                                <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                                    <OwlCarousel
                                        className="owl-theme feedback-slider"
                                        loop
                                        items={1}
                                        autoplay={false}
                                        nav={false}
                                        dots={false}
                                        mouseDrag={true}
                                        touchDrag={true}
                                        navText={["<i className='fa fa-long-arrow-left'></i>", "<i className='fa fa-long-arrow-right'></i>"]}
                                        responsive={{
                                            767: {
                                                nav: true,
                                                dots: false
                                            }
                                        }}
                                    >

                                        <div className="feedback-slider-item">
                                            <img src={require("../assets/images/client1.jpg")} className="center-block img-circle" alt="" />
                                            <h3 className="customer-name">Lisa Redfern</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
                                            <span className="light-bg customer-rating" data-rating="5">
                                                5
            <i className="fa fa-star"></i>
                                            </span>
                                        </div>

                                        <div className="feedback-slider-item">
                                            <img src={require("../assets/images/client2.jpg")} className="center-block img-circle" alt="" />
                                            <h3 className="customer-name">Cassi</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
                                            <span className="light-bg customer-rating" data-rating="4">
                                                4
            <i className="fa fa-star"></i>
                                            </span>
                                        </div>

                                        <div className="feedback-slider-item">
                                            <img src={require("../assets/images/client3.jpg")} className="center-block img-circle" alt="" />
                                            <h3 className="customer-name">Md Nahidul</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.</p>
                                            <span className="light-bg customer-rating" data-rating="5">
                                                5
            <i className="fa fa-star"></i>
                                            </span>
                                        </div>

                                    </OwlCarousel>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="call_bak">
                    <div className="container">
                        <h2>FOR ANY HELP OR INQUIRIES       <span><img src={require("../assets/images/ico5.png")} /></span> +44 (2038) 09 95 97 </h2>
                    </div>

                </section>





                <Footer />
            </Fragment >

        )
    }


}


export default Home;
