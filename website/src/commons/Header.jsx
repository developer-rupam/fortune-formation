import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { storeCurrentRoute, logout } from '../utils/library';
import { withRouter } from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showServiceSubmenu : false,
            showOfficeServiceSubmenu : false,
        }

    }


    /*** Method defination for ttoggling sub menu ****/
    toggleSubMenu = (param) =>{
        if(param === 'services'){
            this.setState({
                showServiceSubmenu : true,
                showOfficeServiceSubmenu : false,

            })
        }else if(param === 'officeservices'){
            this.setState({
                showServiceSubmenu : false,
                showOfficeServiceSubmenu : true,

            })
        }
    }



    render() {
        return (
            <Fragment>
                <header className="float-panel" data-top="0" data-scroll="100">

                    <div className="main_header_area animated">
                        <div className="container">
                            <nav id="navigation1" className="navigation">
                                <div className="nav-header">
                                    <a className="nav-brand" href="index.html"><img src={require('../assets/images/logo.png')} /></a>
                                    <div className="nav-toggle"></div>
                                </div>
                                <div className="nav-list">
                                    <ul>
                                        <li><a href=""><span><img src={require("../assets/images/io.png")} /></span> Client Login</a></li>
                                        <li><a href=""><span><img src={require("../assets/images/c1.png")} /></span>  +44 (2038) 09 95 97 </a></li>
                                    </ul>

                                </div>
                                <div className="nav-menus-wrapper">
                                    <ul className="nav-menu align-to-right">
                                        <li><a href="index.html">Home</a></li>
                                        <li onMouseOver={(e)=>{this.toggleSubMenu('services')}} onMouseLeave={(e) => this.setState({
                                             showServiceSubmenu : false,
                                             showOfficeServiceSubmenu : false,
                                        })}><a href="">Services</a>
                                            {this.state.showServiceSubmenu && <div className="megamenu-panel nav-submenu" style={{display:'block',right:'0px'}}>
                                                <div className="megamenu-lists">
                                                    <ul className="megamenu-list list-col-3">
                                                        <li className="megamenu-list-title"><a href="">Company Formations </a></li>
                                                        <li><a href="starter.html">Starter Pack</a></li>
                                                        <li><a href="business.html">Business Pack</a></li>
                                                        <li><a href="corporate.html">Corporate Pack</a></li>
                                                        <li><a href="international.html">International Pack</a></li>

                                                    </ul>
                                                    <ul className="megamenu-list list-col-3">
                                                        <li className="megamenu-list-title"><a href="">Office Services </a></li>
                                                        <li><a href="#">Registered Office Services</a></li>
                                                        <li><a href="">Business Mail - Scanned</a></li>
                                                        <li><a href="">Business Mail - Forwarded</a></li>
                                                        <li><a href="">Official Mail - Forwarded</a></li>
                                                        <li><a href="">UK Post Box Service</a></li>
                                                        <li><a href="">Telephone Services</a></li>

                                                    </ul>
                                                    <ul className="megamenu-list list-col-3">
                                                        <li className="megamenu-list-title"><a href="">Bank Account Opening </a></li>
                                                        <li><a href="personal.html">Personal Account</a></li>
                                                        <li><a href="corporate_ac.html">Corporate Account</a></li>

                                                    </ul>
                                                    <ul className="megamenu-list list-col-3">
                                                        <li className="megamenu-list-title"><a href="">Other Services </a></li>
                                                        <li><a href="#">VAT Registration</a></li>
                                                        <li><a href="">Telephone Answering Service</a></li>
                                                        <li><a href="">Accounting</a></li>
                                                        <li><a href="">Website Development Service</a></li>

                                                    </ul>
                                                </div>
                                            </div>}
                                        </li>
                                        <li onMouseOver={(e)=>{this.toggleSubMenu('officeservices')}} onMouseLeave={(e) => this.setState({
                                             showServiceSubmenu : false,
                                             showOfficeServiceSubmenu : false,
                                        })}><a href="">Office services</a>

                                        {this.state.showOfficeServiceSubmenu && <ul className="nav-dropdown nav-submenu" style={{display:'block',right:'auto'}}>
                                                <li><a href="#">Registered Office Services</a></li>
                                                <li><a href="">Business Mail - Scanned</a></li>
                                                <li><a href="">Business Mail - Forwarded</a></li>
                                                <li><a href="">Official Mail - Forwarded</a></li>
                                                <li><a href="">UK Post Box Service</a></li>
                                                <li><a href="">Telephone Services</a></li>
                                            </ul>}

                                        </li>
                                        <li><a href="price.html">Price List</a></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
    componentDidMount() {
        /*** calling function for storing current route ***/
        storeCurrentRoute(this.props.location.pathname)

    }
}




export default (withRouter(Header))