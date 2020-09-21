import { createStore, combineReducers } from 'redux'
import { searchReducer,serviceListReducer } from './reducer'



const rootReducer = combineReducers({ 
    searchReducer: searchReducer,
    serviceListReducer : serviceListReducer,
})

// export const store = createStore(searchReducer)
export const store = createStore(rootReducer)