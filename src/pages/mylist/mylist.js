import React from "react";
import {useSelector} from "react-redux";
import SingleMovie from "./singleMovie/singleMovie";
import {activate } from '../component/actions';
import Empty from "../search/empty/empty";
function List(){
    const list = useSelector(state=>state.listReducer);
    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }
    const list2=getUniqueListBy(list, 'Title');
    return(
        <div className=" content list" >
            <h1>Your Movies : {list2.length} </h1>
            
            <div className="movie-list">
                {list2.length===0? <Empty text={"didn't add anything yet... start adding!"} img="add2"/>:""}
            {list2.map(movie=>(
                <SingleMovie data={movie} key={movie.Title} action={activate("search")} link={movie.imdbID}  title={movie.Title} img={movie.Poster} author={movie.Director===undefined? "Not Avialabe" : movie.Director} rate={`${movie.imdbRating===undefined? "?" : movie.imdbRating}/10`} />
             ))}
            </div>
        </div>
    );
}
export default List;