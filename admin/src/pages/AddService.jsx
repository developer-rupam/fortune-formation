import React, { Fragment } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { showToast,showConfirm,showHttpError } from '../utils/library'
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SITENAMEALIAS } from '../utils/init';
import {CreateService} from '../utils/service'


 class AddService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader : false,
            serviceName : '',
            serviceDescription : '',
            serviceStatus : '',
            serviceCreatedBy : JSON.parse(atob(localStorage.getItem(SITENAMEALIAS + '_session')))._id
        };
         /***  BINDING FUNCTIONS  ***/
        this.handleAddService = this.handleAddService.bind(this)
    }

   

   /*** Function defination for adding service api call ***/
   handleAddService = () =>{
       if(
           this.state.serviceName != '' && this.state.serviceName != undefined &&
           this.state.serviceDescription != '' && this.state.serviceDescription != undefined
       ){
        let payload = {
            serviceName : this.state.serviceName,
            serviceDesc : this.state.serviceDescription,
            createdBy : this.state.serviceCreatedBy 
        }   
        this.setState({showLoader : true})
        CreateService(payload).then(function(res){
            this.setState({showLoader : false})
            var response = res.data;
            if(response.error.error_data != 1000){
                showToast('error',response.error.error_msg);
            }else{
                showToast('success','Service added successfully');
                this.props.history.push('/services-list');
            }
        }.bind(this)).catch(function(err){
            this.setState({showLoader : false})
            showHttpError(err)
        }.bind(this))
       }else{
           showToast('error','Please provide name and description');
       }
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
                                            <div className="lft-hdr">
                                                <span><i className="fas fa-user-plus"></i></span>Add Service
                                            </div>
                                            <div className="rght-hdr ">
                                            <Link to="/services-list" className="addclient"><i className="fas fa-arrow-left"></i> Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body custom_card_body_addclientmain">
                                        <div className="card card_cstm same_dv_table cust_back_card">
                                           {/*  <div className="card-header">
                                                <div className="d-flex justify-content-between align-items-center">
                                                <div className="lft-hdr"><span>1</span>Basic Info</div>
                                               
                                                </div>
                                            </div> */}
                                            <div className="card-body custom_card_body_addclientsecond">
                                                <div className="row">
                                                <div className="col-md-12">
                                                    <div className="createclient_main_body">
                                                        <form >
                                                            <div className="detailcreate_area">
                                                            
                                                                <div className="form-row addClientRow" >
                                                                    <div className="form-group col-md-12">
                                                                        <label>Service Name</label>
                                                                        <input type="text" className="form-control" placeholder="Service Name"
                                                                        defaultValue={this.state.serviceName} onBlur={(event) => {this.state.serviceName = event.target.value}} />
                                                                    </div>
                                                                </div>
                                                                <div className="form-row addClientRow" >
                                                                        
                                                                    <div className="form-group col-md-12">
                                                                        <label>Description</label>
                                                                        
                                                                        <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Description" defaultValue={this.state.serviceDescription} onBlur={(event) => {this.state.serviceDescription = event.target.value}}></textarea>
                                                                    </div>
                                                                </div>
                                                            
                                                            </div>
                                                        </form>
                                                      
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                       
                                        <div className="modal_button_area">
                                        <button type="button" className="submit" onClick={this.handleAddService}>Add</button>
                                           
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
      
       
   }

   
    
}

const mapStateToProps = state => {
    return {
        globalState : state
    }
}

export default connect(mapStateToProps,null)(withRouter(AddService))

