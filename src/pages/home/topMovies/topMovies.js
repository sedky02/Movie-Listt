import React, { useContext } from "react";
import {Link} from "react-router-dom";
import SingleMovie from "./singleMovie/singleMovie";
import {HomeConetext} from "../homeContext";
import { useDispatch } from "react-redux";

function TopMovies({action}){
    const Moviesdata = useContext(HomeConetext);
    const dispatch = useDispatch();
    return(
        <div className="top-movies">
            <div className="top">
            <h1>top movies:</h1>
            <Link style={{textDecoration:"none  "} } onClick={()=>dispatch(action)} to="/search">
                <h1>see more</h1>
            </Link>
            </div>
            <div className="movies">
            {Moviesdata.map(movie=>(
                <SingleMovie  key={movie.Title}  action={action} data={movie} link={movie.imdbID}  title={movie.Title} img={movie.Poster} author={movie.Director} rate={movie.Ratings[0].Value} />
             ))}
            </div>
            
        </div>
    )
}

export default TopMovies;