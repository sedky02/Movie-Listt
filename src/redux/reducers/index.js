import darkReducer from './darker';
import  activeReducer from './active';
import loggedReducer from './logged';
import queryReducer from "./api";
import dataReducer from "./data";
import listReducer from './list';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    darkReducer,
    activeReducer,
    loggedReducer,
    queryReducer,
    dataReducer,
    listReducer
})
export default allReducers;