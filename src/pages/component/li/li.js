import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {activate,loggin } from '../actions';

function Li({text,className= " ",action="false", link="/", state= "",active="home"}){
    const isActive = useSelector(state=> state.activeReducer);
    const isLogged = useSelector(state=> state.loggedReducer);
    const dispatch= useDispatch();
   function dispatchItems(){
    dispatch(loggin(action))
    dispatch(activate(active))

      
   }


    return(
        <li onClick={()=>{isLogged? dispatchItems() : dispatch(activate(active)) } }
        

        className={`li ${className} ${isActive ===state? "active" : ""}`}> 
        <Link style={{textDecoration :'none'}} to={link}> 
        {text}
        </Link>
        </li>
    );
}
export default Li ;