import {ERROR,SUCCESS,SEARCH,SERVICES} from './constants'

/*** REDUCER DEFINATION FOR SEARCH IN HEADER SECTION ***/
export const searchReducer = (state = {}, action) => {

    switch (action.type) {
        case SEARCH:
            return { searchObj: { ...state, searchQuery : action.searchText } };
        default:
            return state;
    }
}

/*** REDUCER DEFINATION FOR EMPLOYEE LIST ***/
export const serviceListReducer = (state = [], action) => {
    switch (action.type) {
        case SERVICES:
            return  { ...state, list : action.service } ;
        default:
            return state;
    }
}

