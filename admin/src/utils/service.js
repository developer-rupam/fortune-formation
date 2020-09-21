import { SITENAMEALIAS,WEBSERVICE } from './init'
import Swal from 'sweetalert2'
const axios = require('axios');

/*** Initializing headers ***/
const headers = {headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}}



/*** FUNCTION DEFINATION FOR LOGIN SERVICE ***/
export const AdminLogin = (obj) => {
    var payload = JSON.stringify(obj);

    return axios.post(WEBSERVICE + '/AdminLogin', payload,headers);

}


/*** Function defination to add service ***/
export const CreateService = (obj) => {
    var payload = JSON.stringify(obj);

    return axios.post(WEBSERVICE + '/AddService', payload,headers);
}

