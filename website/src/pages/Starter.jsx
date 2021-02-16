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



class Starter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
           
        };

    }



    /* 
    Method defination for handling accordian 
    */
    handleAccordian = (sourceId,destinationId) => {
        let destinationClassList = document.getElementById(destinationId).classList.value;
        if(destinationClassList.indexOf(' in') !== -1){
            document.getElementById(destinationId).classList.remove("in");
           document.getElementById(sourceId).children[0].children[0].children[0].classList.add('glyphicon-plus')
           document.getElementById(sourceId).children[0].children[0].children[0].classList.remove('glyphicon-minus')
        }else{
            document.getElementById(destinationId).classList.add("in");
            document.getElementById(sourceId).children[0].children[0].children[0].classList.remove('glyphicon-plus')
           document.getElementById(sourceId).children[0].children[0].children[0].classList.add('glyphicon-minus')
        }
    }

    componentDidMount() {


    }


    render() {
        return (
            <Fragment>
                <Header />


                <section className="banner">
                    <img src={require("../assets/images/inner_bak.png")} />
                </section>



                <div id="main_sec">
                    <div className="container">
                        <div className="heading_part">
                            <span><img src={require("../assets/images/ico6.png")} /> Starter Pack</span>
                        </div>
                        <ul className="op">
                            <li> Price - £ 550</li>
                            <li>
                                <a href="#" className="bt">Compare Packages </a>
                                <a href="#" className="bt">Buy Now </a>

                            </li>
                        </ul>


                        <section className="sat">
                            <div className="col-md-6 col-sm-12">
                                <div className="bl">
                                    <h3>What's Included in this package</h3>

                                    <ul>
                                        <li><i className="fas fa-arrow-right"></i> Ready-To-Trade Company Limited By Shares</li>
                                        <li><i className="fas fa-arrow-right"></i> Companies House Filing Fee Paid By Us</li>
                                        <li><i className="fas fa-arrow-right"></i> Digital (PDF) Company Documents</li>
                                        <li><i className="fas fa-arrow-right"></i> Company Administration Portal</li>
                                        <li><i className="fas fa-arrow-right"></i> Web Authentication Code</li>
                                        <li><i className="fas fa-arrow-right"></i> Free Domain Name</li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="bl">
                                    <h3>What's Included in this package</h3>

                                    <ul>
                                        <li><i className="fas fa-arrow-right"></i> Free Business Bank Account With £50 Cashbac </li>
                                        <li><i className="fas fa-arrow-right"></i> Merchant Account Referral</li>
                                        <li><i className="fas fa-arrow-right"></i> Free Referral To a Payroll Bureau</li>
                                        <li><i className="fas fa-arrow-right"></i> VAT Registration Service </li>
                                        <li><i className="fas fa-arrow-right"></i> Non Status Bank Account</li>
                                        <li><i className="fas fa-arrow-right"></i> Accountant Referral With Free Initial Consultation</li>
                                    </ul>

                                </div>
                            </div>


                        </section>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="demo">


                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={(e) => {this.handleAccordian('headingOne','collapseOne')}}>
                                                    <i className="more-less glyphicon glyphicon-plus"></i>
                       Summary
                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={(e) => {this.handleAccordian('headingTwo','collapseTwo')}}>
                                                    <i className="more-less glyphicon glyphicon-plus"></i>
                        Users, Requirements and Suitability
                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={(e) => {this.handleAccordian('headingThree','collapseThree')}}>
                                                    <i className="more-less glyphicon glyphicon-plus"></i>
                       Pricing and Value for Money
                    </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>







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


export default Starter;
