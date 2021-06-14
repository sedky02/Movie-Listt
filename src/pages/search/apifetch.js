import React, { useContext, useEffect } from "react";
import {SearchConetext} from './searchContext';
function FetchApi (){
    const {movies , names}= useContext(SearchConetext);
    const [Moviesdata, setMoviesdata]= movies;
    const [name , setName]= names;
    const API_KEY = "786e272a";
    /*[
        {"Title":"Not avialable","Poster":"N/A","Response":"True"}

    ]*/
    useEffect(()=>{
        fetch(` http://www.omdbapi.com/?s=${name}&apikey=${API_KEY}`)
        .then(result => result.json())
        .then(data => {
        setMoviesdata( typeof data.Search === 'object' && data.Search !== null ? data.Search:[
            {"Title":"Not avialable","Poster":"N/A","Response":"False", "imdbID" : "notAvialable"}
        ])})

        }, [name])
   
    return(
        <div>

        </div>
    );
}
export default FetchApi;