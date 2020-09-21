import {SEARCH,SERVICES} from './constants'

/*** ACTION DEFINATION FOR SET SEARCH QUERY ***/
export const setSearch = (text) => {
    const action = {
        type : SEARCH,
        searchText : text
    }
    return action
}

/*** ACTION DEFINATION FOR EMPLOYEES LIST ***/
export const setServicesList = (array) => {
    const action = {
        type : SERVICES,
        service : array
    }
    return action
}




