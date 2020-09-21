import React, { Fragment } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { showToast,showConfirm,showHttpError } from '../utils/library'
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setServicesList } from "../utils/redux/action"
import { SITENAMEALIAS } from '../utils/init';
import {GetAllServicesList} from '../utils/service';
import Moment from 'react-moment';


 class ServicesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader : false,
            servicesList : [],
        };
         /***  BINDING FUNCTIONS  ***/
         this.fetchAllServices = this.fetchAllServices.bind(this)
    }

   /*** Function defination to fetch all services ****/
   fetchAllServices = () =>{
    this.setState({showLoader : true})
    let payload = {}
    GetAllServicesList(payload).then(function(res){
            this.setState({showLoader : false})
            var response = res.data;
            if(response.error.error_data != 1000){
                showToast('error',response.error.error_msg);
            }else{
                this.setState({
                    servicesList : response.result,
                })
                console.log(response.result)
                this.props.setServicesList(response.result);
                setTimeout(() => {
                    console.log(this.props)
                    
                }, 1000);
            }
        }.bind(this)).catch(function(err){
            this.setState({showLoader : false})
            showHttpError(err)
        }.bind(this))
   }

  
    

    render() {
        return (
            <Fragment>
            <Header/>
            <div className="app-body">
                <Sidebar/>
                <main className="main">
                    <div className="container-fluid">
                    <div id="ui-view">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card_cstm same_dv_table">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="lft-hdr"><span><i className="fas fa-users"></i></span>Services List</div>
                                        <div className="addbutton">
                                            
                                          
                                            <Link to="/add-service" className="addclient"><i className="fas fa-user-plus"></i>Add New Service</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body custom_card_body_browesclient">
                                    <div className="dash_lft_t">
                                        <table className="table table-striped table-bordered dt-responsive text-center">
                                            <thead>
                                            <tr>
                                                <th>Service</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Created</th>
                                                <th>Manage</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.servicesList.map((list) =>
                                            <tr key={list._id}>
                                                
                                                <td>{list.service_name}</td>
                                                <td>{(list.service_desc).substring(0, 20)}</td>
                                                <td><span className={list.active_status ? 'text-success' : 'text-danger'}>{list.active_status ? 'Active' : 'Inactive'}</span></td>
                                                <td> 
                                                    <Moment format="YYYY/MM/DD" unix>{list.created}</Moment>
                                                </td>
                                                <td>
                                                    <div className="ac_bot d-flex justify-content-center">
                                                        <Link to={'/update-service/'+list._id} className="btn btn-light view_edit"><i className="fas fa-user-edit"></i></Link>
                                                        
                                                    </div>
                                                </td>
                                            </tr>
                                            )}
                                            </tbody>
                                        </table>
                                        <div className="row">
                                            <div className="col-md-8"></div>
                                            <div className="col-md-4 float-right">
                                            
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
            <Footer/>
            
            <Loader show={this.state.showLoader}/>
           </Fragment>
               
        )
    }

    componentDidMount(){
        /*** calling method for retrieving all services list ***/
        this.fetchAllServices();
       
   }

   
    
}

const mapStateToProps = state => {
    return {
        globalState : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setServicesList : (array) => dispatch(setServicesList(array)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ServicesList))

