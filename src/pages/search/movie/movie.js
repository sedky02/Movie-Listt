import React, { useState } from "react";
import FetchMovie from "./fetchmovie";
import { useSelector } from "react-redux";
import TopMovies from './topMovies/topMovies';
function Movie({match} ){
    const [isClicked , setClicked] = useState(false);
    const [isLong , setLong] = useState(false);
    const [isLong2 , setLong2] = useState(false);
    const data = useSelector(state => state.dataReducer);
    console.log(data);
    return(
        <div className="content movie-container"  >
            <FetchMovie match={match}/>
            <div className="movie">
            <img src={data.Poster=== "N/A" ? "/images/No image.jpg" : data.Poster} alt="background-img" className="bg" />
            <div className="movie-text">
                <div className="top">
                    <h1>
                        <span className="title"> {data.Title === "N/A" ? "not avialable" : data.Title}</span> 
                        <span className="time">({data.Runtime === "N/A" ? "not avialable" : data.Runtime})</span>
                    </h1>
                    <div onClick={()=>setClicked(!isClicked)} className="rate">
                        <img  src={`/images/star-${isClicked ? "full" : "empty"}.svg`} alt="star" />
                        <h3>{data.imdbRating}/10</h3>
                    </div>
                </div>
                <p onClick={()=> setLong(!isLong)} className={`middle ${isLong ? "clicked" : ""}`}>
                    {data.Plot === "N/A" ? "not avialable" : data.Plot}
                </p>
                <div className="end">
                    <h2> Actors <span> {data.Actors === "N/A" ? "not avialable" : data.Actors}</span> </h2>
                    <h2 onClick={()=> setLong2(!isLong2)} > Director <span className={`director ${isLong2 ? "clicked" : ""}`} >{data.Director === "N/A" ? "not avialable" : data.Director}</span> </h2>
                    <div className="wrapper">
                    <h2 className="awards" > Awards <span>{data.Awards === "N/A" ? "not avialable" : data.Awards}</span> </h2>
                    <h2 className="type"> Type <span>{data.Type === "N/A" ? "not avialable" : data.Type}</span> </h2>
                    </div>
                </div>
            </div>
            </div>
            <TopMovies/>

        </div>
    );
}
export default Movie ;