import React, { Fragment } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { SITENAMEALIAS } from '../utils/init';
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { GetAllEmployee,RemoveEmployee,LoginUser } from '../utils/service'
import { showToast,showHttpError } from '../utils/library'
import {setEmployeeList,setClientList } from "../utils/redux/action"
import { Modal } from 'react-bootstrap';


 class BrowseEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader : false,
            selectedAlphabetOfEmployee : "",
            activePage : 1,
            pageNo : 1,
            noOfItemsPerPage : 10,
            totalCount : 100,
            employeesList : [],
            isPasswordMatched : false,
            showConfirmPasswordModal : false,
            selectedPasswordForDeletion : [],
        };
         /***  BINDING FUNCTIONS  ***/
         this.selectEmployeeNameAlphabet = this.selectEmployeeNameAlphabet.bind(this)
         this.handlePageChange = this.handlePageChange.bind(this)
         this.getAllEmployeesList = this.getAllEmployeesList.bind(this)
         this.deleteEmployee = this.deleteEmployee.bind(this)
         this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
         this.propagateConfirmPasswordModal = this.propagateConfirmPasswordModal.bind(this)
         this.handleSelectMultiUser = this.handleSelectMultiUser.bind(this)
         this.handleInitiateMultipleDelete = this.handleInitiateMultipleDelete.bind(this)

       /*** REFERENCE FOR RETRIEVING INPUT FIELDS DATA ***/
       this.passwordRef = React.createRef();
    }

    /*** FUNCTION DEFINATION FOR SELECTING ALPHABET OF CLIENTS NAME ***/
    selectEmployeeNameAlphabet = (e) => {
        this.setState({selectedAlphabetOfEmployee : e.target.value})
        setTimeout(function(){
            console.log(this.state.selectedAlphabetOfEmployee)
            this.getAllEmployeesList()
        }.bind(this),1000)
    }

    /*** FUNCTION DEFINATION FOR SELECTING PAGE FROM PAGINATION ***/
    handlePageChange = (page) =>{
        this.setState({
            activePage : page,
            pageNo : page
        })
        setTimeout(() => {
            this.getAllEmployeesList()
        }, 1000);
    }

    /*** FUNCTION DEFINATION TO GET EMPLOYEE LIST ****/
    getAllEmployeesList = () =>{
        let payload ={
            page_no : this.state.pageNo,
            page_size : this.state.noOfItemsPerPage,
        }
        this.setState({showLoader : true})
        GetAllEmployee(payload).then(function(res){
            this.setState({showLoader : false})
            var response = res.data;
            if(response.errorResponse.errorStatusCode != 1000){
                showToast('error',response.errorResponse.errorStatusType);
            }else{

                let allEmployeesList = response.response;
                let employeesList = [];
                for(let i=0;i<allEmployeesList.length;i++){
                    if(allEmployeesList[i].user_role == 'EMPLOYEE' && allEmployeesList[i].created_by == JSON.parse(atob(localStorage.getItem(SITENAMEALIAS + '_session'))).user_id){
                        console.log(this.state.selectedAlphabetOfEmployee)
                        if(this.state.selectedAlphabetOfEmployee != ''){
                            console.log('if')
                            let firstCharcterOfName =  allEmployeesList[i].employee_name.charAt(0);
                            let firstCharcterOfEmail =  allEmployeesList[i].employee_email.charAt(0);
                            
                            if(firstCharcterOfEmail.toLowerCase() == this.state.selectedAlphabetOfEmployee || firstCharcterOfName.toLowerCase() == this.state.selectedAlphabetOfEmployee){
                                employeesList.push(allEmployeesList[i])
                            }
                        }else{
                            console.log('else')
                            employeesList.push(allEmployeesList[i])
                        }
                    }
                }
                this.props.setEmployeeList(employeesList);
                console.log( employeesList)
                this.setState({employeesList : this.props.globalState.employeeListReducer.employeesList})
            }
        }.bind(this)).catch(function(err){
            this.setState({showLoader : false})
            showHttpError(err)
        }.bind(this))

    }

    /**** FUNCTION DEFINATION FOR DELETING CLIENT ****/
    deleteEmployee = () => {
        let selectedPasswordForDeletion = this.state.selectedPasswordForDeletion
        for(let i=0;i<selectedPasswordForDeletion.length;i++){
            let payload = { employee_id : selectedPasswordForDeletion[i]}
            RemoveEmployee(payload).then(function(res){
                this.setState({showLoader : false})
                var response = res.data;
                if(response.errorResponse.errorStatusCode != 1000){
                    showToast('error',response.errorResponse.errorStatusType);
                }else{
                    showToast('success','Employee deleted successfully');
                    this.getAllEmployeesList();
                
                }
            }.bind(this)).catch(function(err){
                this.setState({showLoader : false})
                showHttpError(err)
            }.bind(this))
        }
    }

    /*** FUNCTION DEFINATION FOR HANDLING SUBMIT FOR CONFIRM WITH PASSWORD BEFORE DELETE ****/
    handleConfirmPassword = (e) => {
        e.preventDefault();
       
        let session =  JSON.parse(atob(localStorage.getItem(SITENAMEALIAS + '_session')));
        
        //if(session.user_role == 'ADMIN'){
            let email = session.user_email
       /*  }else{
            var email = session.employee_email
        } */
        let payload = {
            user_email : email,
            user_password : this.passwordRef.current.value
        }
        this.setState({showLoader : true})
        LoginUser(payload).then(function(res){
            this.setState({showLoader : false})
            var response = res.data;
            if(response.errorResponse.errorStatusCode != 1000){
                showToast('error',response.errorResponse.errorStatusType);
            }else{
                this.setState({
                    showConfirmPasswordModal : false,
                })
                this.deleteEmployee()
            }
        }.bind(this)).catch(function(err){
                this.setState({showLoader : false})
                showHttpError(err)
        }.bind(this))

       
    }

    /*** Function defination to propagate confirm password modal ***/
    propagateConfirmPasswordModal = (param) => {
        let arr = []
        arr.push(param)
        this.setState({showConfirmPasswordModal : true,selectedPasswordForDeletion : arr})
    }
    /*** Function defination to select multiple user for deletion using check box ***/
    handleSelectMultiUser = (e) => {
        
        let arr = this.state.selectedPasswordForDeletion;
        let id = e.target.getAttribute("data-id");
        console.log(id)
        if(e.target.checked){
            arr.push(id)
        }else{
            var index = arr.indexOf(id);
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
        this.setState({selectedPasswordForDeletion : arr}) 
    }

    /*** Function defination to initate multiple delte ***/
    handleInitiateMultipleDelete = () => {
       if(this.state.selectedPasswordForDeletion.length != 0){
        this.setState({showConfirmPasswordModal : true}) 
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
                                            <div className="lft-hdr"><span><i className="fas fa-users"></i></span>Browse Employees</div>
                                            <div className="addbutton">
                                                <div className="serach_box_bylte">
                                                <form>
                                                    <label>Search By Letter</label>
                                                   
                                                       <select className=" form-control" onChange={this.selectEmployeeNameAlphabet}>
                                                        <option value="">ALL</option>
                                                        <option value="a">A</option>
                                                        <option value="b">B</option>
                                                        <option value="c">C</option>
                                                        <option value="d">D</option>
                                                        <option value="e">E</option>
                                                        <option value="f">F</option>
                                                        <option value="g">G</option>
                                                        <option value="h">H</option>
                                                        <option value="i">I</option>
                                                        <option value="j">J</option>
                                                        <option value="k">K</option>
                                                        <option value="l">L</option>
                                                        <option value="m">M</option>
                                                        <option value="n">N</option>
                                                        <option value="o">O</option>
                                                        <option value="p">P</option>
                                                        <option value="q">Q</option>
                                                        <option value="r">R</option>
                                                        <option value="s">S</option>
                                                        <option value="t">T</option>
                                                        <option value="u">U</option>
                                                        <option value="v">V</option>
                                                        <option value="w">W</option>
                                                        <option value="x">X</option>
                                                        <option value="y">Y</option>
                                                        <option value="z">Z</option>
                                                       </select>
                                                </form>
                                                </div>
                                                <button type="submit" className="deleteclient" onClick={this.handleInitiateMultipleDelete}><i className="fas fa-user-minus"></i>Delete Selected Employee</button>
                                                <Link to="/create-employee" className="addclient"><i className="fas fa-user-plus"></i>Create Employee</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body custom_card_body_browesclient">
                                        <div className="dash_lft_t">
                                            <table className="table table-striped table-bordered dt-responsive text-center">
                                                <thead>
                                                <tr>
                                                    <th>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="check_all"/>
                                                            <label className="custom-control-label" htmlFor="check_all"></label>
                                                        </div>
                                                    </th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Company</th>
                                                    <th>Last Login</th>
                                                    <th>Manage</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.employeesList.map((list) =>
                                                <tr key={list.employee_id}>
                                                    <td>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input checkbox" onClick={(event)=>{this.handleSelectMultiUser(event)}} data-id={list.employee_id} id={list.employee_id}/>
                                                            <label className="custom-control-label" htmlFor={list.employee_id}></label>
                                                        </div>
                                                    </td>
                                                    <td>{list.employee_name}</td>
                                                    <td>{list.employee_email}</td>
                                                    <td>{list.employee_company}</td>
                                                    <td> 
                                                        <Moment format="YYYY/MM/DD" date={list.user_created}/>
                                                    </td>
                                                    <td>
                                                        <div className="ac_bot d-flex justify-content-center">
                                                            <Link to={'/update-employee/'+list.employee_id} className="btn btn-light view_edit"><i className="fas fa-user-edit"></i></Link>
                                                            <a href="javascript:void(0)" className="btn btn-light view_dlt" onClick={()=>{this.propagateConfirmPasswordModal(list.employee_id)}}><i className="fas fa-user-minus"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                )}
                                                </tbody>
                                            </table>
                                            <div className="row">
                                                <div className="col-md-8"></div>
                                                <div className="col-md-4 float-right">
                                                <Pagination
                                                    activePage={this.state.activePage}
                                                    itemsCountPerPage={this.state.noOfItemsPerPage}
                                                    totalItemsCount={this.state.totalCount}
                                                    pageRangeDisplayed={5}
                                                    onChange={this.handlePageChange.bind(this)}
                                                    itemClass="page-item"
                                                    linkClass="page-link"
                                                />
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
                <Modal
                        show={this.state.showConfirmPasswordModal}
                        onHide={() => {this.setState({showConfirmPasswordModal:false})}}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>Confirm Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="importmodal_content">
                                    <div className="importmodal_contentfirst">
                                       
                                        <p>Please provide your password before procedding </p>
                                        <form className="form-inline" onSubmit={this.handleConfirmPassword}>
                                            <div className="form-group mx-sm-3 mb-2">
                                                <label for="inputPassword2" className="sr-only">Password</label>
                                                <input type="password" className="form-control" id="confirmPassword" placeholder="Password"  ref={this.passwordRef} />
                                            </div>
                                            <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
                                        </form>          
                                    </div>
                                   
                                </div>
                        </Modal.Body>
                        
                    </Modal>
                <Loader show={this.state.showLoader}/>
               </Fragment>
               
        )
    }

    componentDidMount(){
         /*** FUNCTION CALL FOR RETRIEVING ALL EMPLOYEES LIST ***/
         this.getAllEmployeesList()
         
    }

    
}

const mapStateToProps = state => {
    return {
        globalState : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEmployeeList : (array) => dispatch(setEmployeeList(array)),
        setClientList : (array) => dispatch(setClientList(array)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrowseEmployees)
