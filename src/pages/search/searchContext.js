import React,{ createContext, useState} from 'react';
export const SearchConetext = createContext();
export const SearchProvider = (props)=>{
    const [Moviesdata, setMoviesdata]= useState([]);
    const [Moviedata, setMoviedata]= useState([]);
    const [name, setName] = useState("");

    return(
        <SearchConetext.Provider value={
            {movies : [Moviesdata, setMoviesdata] , names : [name, setName] , data: [Moviedata, setMoviedata] }
             }  >
            {props.children}
        </SearchConetext.Provider>
    );
}