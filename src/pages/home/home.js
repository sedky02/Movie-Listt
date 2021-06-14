import React from "react";
import {HomeProvider} from './homeContext';
import TopMovies from './topMovies/topMovies';
import {activate} from "../component/actions";

function Home (){
    return(
        <HomeProvider> 
            <div className="content home">
                <TopMovies action={activate("search")}/>
            </div>
        </HomeProvider>
     
    );
}
export default Home;
