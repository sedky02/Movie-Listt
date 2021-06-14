import React, { useContext } from "react";
import SingleMovie from "./singleMovie/singleMovie";
import {SearchConetext} from "../searchContext";
import FetchApi from "../apifetch";
import Empty from "../empty/empty";
import { useSelector } from "react-redux";
function Movies(){
    const {movies }= useContext(SearchConetext);
    const [Moviesdata, setMoviesdata]= movies;
    const isDark = useSelector(state => state.darkReducer)
    return(
           
        <div>
                <FetchApi/>
                <div className="movies">
                { Moviesdata.map((movie)=>(
                   movie.Response ==="False" ? <Empty img="notfound" c="useless"  className="notfound-img" text="there is no result... try again :("/> : 
                <SingleMovie data = {movie} key={movie[movie.index]} title={movie.Title} 
                className={movie.Poster=== "N/A" && isDark? "dark-img" : ""} link={movie.imdbID}
                img={movie.Poster=== "N/A" ? "images/No image.jpg" : movie.Poster}   
                />
             ))}
             </div>

        </div>
            
    )
}

export default Movies;