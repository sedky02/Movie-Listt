import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { removeList } from "../../home/topMovies/singleMovie/action";
import Note from "./notes/note"
function SingleMovie({img, rate,title,author , action, link , remove , data }){
  const dispatch = useDispatch();
  const [toggle, setToggle]=useState(false);
    return(
        <div>
            {toggle? <Note className="warn" text="wanna remove it?" /> :""}
        <div className="single-movie" >
            
            <h1 className="add-movie" onClick={()=>{
                dispatch(removeList(data))
            }} onMouseOver={()=>setToggle(true)} >- 
            </h1> 
            <Link style={{textDecoration : "none"}} onClick={()=> dispatch(action)} to={`/search/${link}`} >
            <h4 className="rate">
                rate: {rate}
            </h4>
            <div className="text">
                 
                <h2 className="title"> title: <span>{title}</span> </h2>
                <h2>Dorector: {author}</h2>
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