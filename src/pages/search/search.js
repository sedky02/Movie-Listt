import React, { useContext } from "react";
import SearchBar from "./searchbar/serach_bar"
import Empty from "./empty/empty";
import Movies from "./movies/movies";
import {SearchProvider , SearchConetext} from "./searchContext";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Movie from "./movie/movie";

function Page1 (){
    const { names}= useContext(SearchConetext);
    const [name , setName]= names;
    //img="notfound" className="notfound-img" text="there is no result... try again :("
    //   <Empty   />
    // || name.length <= 2 || name.length===5 || name.length===6
    return(
        <div className="page1">
            <SearchBar/>
            {name===""  ?  <Empty/> : <Movies /> }
        </div>
    );
}
function Search(){
    return(
        <Router>
            <SearchProvider>
                <div className="content search " >
                    <Switch>
                        <Route path="/search/" exact component={Page1} />
                        <Route path="/search/:id"  component={Movie}/>
                    </Switch>
                </div>
            </SearchProvider>
        </Router>
    );
}
export default Search;