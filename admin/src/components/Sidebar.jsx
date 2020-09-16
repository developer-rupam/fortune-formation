import React, { Fragment } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { SITENAME,SITENAMEALIAS } from '../utils/init';
import { storeCurrentRoute } from '../utils/library';
import { withRouter } from 'react-router-dom';


 class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			hasAccessToManageEmployees : false,
			hasAccessToManageClients : false,
			hasPermissionToAccessPersonalSettings : false
		}

        /**** BINDING FUNCTION ****/
        this.toggleNavigationDropdown = this.toggleNavigationDropdown.bind(this);
        this.getLoggedInUserDetailsForPermission = this.getLoggedInUserDetailsForPermission.bind(this);
    }


    

    /**** FUNCTION DEFINATION FOR TOGGLING DROPDOWN OF NAVIGATION ****/
    toggleNavigationDropdown = (e) => {
        let node = document.getElementById(e.target.id)
        if(node.parentElement.classList.contains('show')){
            node.parentElement.classList.remove('show')
			node.nextSibling.classList.remove('show')
        }else{
            node.parentElement.classList.add('show')
            node.nextSibling.classList.add('show')
        }
	}
	
	/*** FUNCTION DEFINATION TO GET LOGGED IN USER DETAILS FOR PERMISSION ***/
	getLoggedInUserDetailsForPermission = () => {
		let session = JSON.parse(atob(localStorage.getItem(SITENAMEALIAS + '_session')))
		console.log(session)
		if(session.user_role == 'ADMIN'){
			var manageClients = true;
			var manageEmployees = true;
		}else if(session.user_role == 'CLIENT'){
			var manageClients = false;
			var manageEmployees = false;
		}else{
			var manageClients = session.manage_client;
			var manageEmployees = session.manage_employee;
		}
		this.setState({
			hasAccessToManageClients : manageClients,
			hasAccessToManageEmployees : manageEmployees,
			hasPermissionToAccessPersonalSettings:session.access_user_settings,
		})
	}


    render() {
		
        return (
            <Fragment>
                <div className="sidebar">
            <nav className="sidebar-nav">
               <ul className="nav">
                  <li className="nav-item">
                     <NavLink className="nav-link" activeClassName="active" to="/dashboard" >
                    <i className="fas fa-home mr-2" ></i>Dashboard </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" activeClassName="active" to="/add-service" >
                    <i className="fas fa-home mr-2" ></i>Services </NavLink>
                  </li>
                  
				  
				</ul>
            </nav>
         </div> 
            </Fragment>
        )
    }
    componentDidMount(){
        /*** calling function for storing current route ***/
		storeCurrentRoute(this.props.location.pathname)
		
		/** Calling FUNCTION TO GET LOGGED IN USER DETAILS ***/
		this.getLoggedInUserDetailsForPermission();

    }
}

export default withRouter(Sidebar);