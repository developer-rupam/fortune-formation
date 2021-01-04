import { SITENAMEALIAS,WEBSERVICE,COMPANYHOUSEAPPKEY } from './config'
import Swal from 'sweetalert2'
const axios = require('axios');

/*** Initializing headers ***/
const headers = {headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}}
const companyHouseAuthHeaders = {headers:{'Authorization' : COMPANYHOUSEAPPKEY,'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*'}}



/*** FUNCTION DEFINATION FOR LOGIN SERVICE ***/
export const FetchCompanyListByQuery = (query) => {
    return axios.get('https://api.company-information.service.gov.uk/search/companies?items_per_page=1000&q=' + query,companyHouseAuthHeaders);

}



