import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setData} from "../action.js";
function FetchMovie ({match}){
    const API_KEY = "786e272a";
    const dispatch = useDispatch();
    console.log(match);
    useEffect(()=>{
        getMovie()
        },[match.params.id])
    const getMovie = async ()=>{
        const response = await fetch(` http://www.omdbapi.com/?i=${match.params.id}&apikey=${API_KEY}`);
        const data = await response.json();
         dispatch(setData(data));
    }
    /*[
        {"Title":"Not avialable","Poster":"N/A","Response":"True"}
typeof data.Search === 'object' && data.Search !== null ? data.Search:[
            {"Title":"Not avialable","Poster":"N/A","Response":"False", "imdbID" : "notAvialable"}
        ]
        fetch(` http://www.omdbapi.com/?t=${match.params.id}&apikey=${API_KEY}`)
        .then(result => result.json())
        .then(data => {
        setMoviedata( data)});
        console.log(Moviedata);
    ]*/
    return(
        <div>

        </div>
    );
}
export default FetchMovie;