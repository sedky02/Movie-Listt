import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { getList , removeList} from "./action";
import Note from "../notes/note";
function SingleMovie({img,data, rate,title,link = "", className=""}){
    const [toggle , setToggle] = useState(false);
    const [toggleBtn , setToggleBtn] = useState(true);
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.loggedReducer);
    
    return(
        <div>
        {toggle ? <Note className="fail" text="you're not logged in" /> : toggleBtn?  "" :<Note className="success" text="added to my list" />}

        <div className="single-movie">
        <h1 className="add-movie" onClick={()=>{
                if(isLogged===true){
                    setToggle(false)
                    if(toggle===false){
                        toggleBtn? dispatch(getList(data)) : dispatch(removeList(data)) 
                        setToggleBtn(!toggleBtn);
                    }
                }else if(isLogged===false){
                    setToggle(true)
                }
                
                
            }} >{toggleBtn ? "+" : "-"} 
            </h1>  
            <Link style={{textTransform:"none"}} to={`/search/${link}`}>
            <div className="text">
                 
                <h2 className="title"> title: <span>{title}</span> </h2>
            </div>
            <div className="box">
                <img src={img} alt="poster" className={className} />
            </div>
            </Link>
        </div>
        </div>
    )
}

export default SingleMovie;