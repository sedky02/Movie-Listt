import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Note from "../notes/note";
import { getList, removeList } from "../../../movies/singleMovie/action";
function SingleMovie({img, rate,title,author,data ,link}){
    const dispatch = useDispatch();
    const [toggle , setToggle] = useState(false);
    const [toggleBtn , setToggleBtn] = useState(true);
    const isLogged = useSelector(state => state.loggedReducer);
    
    //  /search/tt1375666
    //  /search/tt1375666
    return(
        <div>
                        {toggle ? <Note className="fail" text="you're not logged in" /> :toggleBtn?  "" :<Note className="success" text="added to my list" />}

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
            <Link style={{textDecoration : "none"}} to={`/search/${link}`}>
            <h4 className="rate">
                rate: {rate}
            </h4>
            <div className="text">
                 
                <h2 className="title"> title: <span>{title}</span> </h2>
                <h2>By: {author}</h2>
            </div>
            <div className="box">
                <img src={img} alt="poster" />
            </div>
            </Link> 
        </div>
        </div>
    )
}

export default SingleMovie;