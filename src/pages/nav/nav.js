import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Li from '../component/li/li';
import DarkSwitcher from "../component/darkSwitcher/darkSwitcher";
import {activate, loggin} from '../component/actions';
import { Link } from 'react-router-dom';
function Nav (){
    const isLogged = useSelector(state=> state.loggedReducer)
    const list = useSelector(state=>state.listReducer);
    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    const list2=getUniqueListBy(list, 'Title');    const dispatch = useDispatch()
    return(
        <div className="nav">
             <Link style={{textDecoration :'none'}} to="/" onClick={()=>dispatch(activate("home"))}> 
             <h2 className="logo">Movie List</h2>
            </Link>
            
            <ul>
                <Li text={"Home"} state="home" img={"./images/home.svg"} active="home"/>
                <Li text={"search"} state="search" img="search" active="search" link="/search"/>
                <Li text={`my list ${isLogged? list2.length : ""}`} state="list" img="books" active="list" link="/list" />
                <Li link={isLogged? "/" : "/login"} action={isLogged? "true" : ""} text={isLogged? "Log Out" : "Log in"} state="logged" img="login" active={isLogged? "home": "logged"} />
            
            </ul>
            <DarkSwitcher/>
        </div>
    );
}

export default Nav;
