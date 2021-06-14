import React from "react";
import {Link} from "react-router-dom";
import SingleMovie from "./singleMovie/singleMovie";
function TopMovies({action}){
    const Moviesdata = [{"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 153 wins & 220 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"2,099,831","imdbID":"tt1375666","Type":"movie","DVD":"20 Jun 2013","BoxOffice":"$292,576,195","Production":"Syncopy, Warner Bros.","Website":"N/A","Response":"True"},
    {"Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow","Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.","Language":"English","Country":"USA, UK, Canada","Awards":"Won 1 Oscar. Another 43 wins & 148 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"72%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.6","imdbVotes":"1,544,189","imdbID":"tt0816692","Type":"movie","DVD":"24 May 2016","BoxOffice":"$188,020,017","Production":"Syncopy, Lynda Obst Productions","Website":"N/A","Response":"True"},
    {"Title":"1917","Year":"2019","Rated":"R","Released":"10 Jan 2020","Runtime":"119 min","Genre":"Drama, Thriller, War","Director":"Sam Mendes","Writer":"Sam Mendes, Krysty Wilson-Cairns","Actors":"Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth","Plot":"April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.","Language":"English, French, German","Country":"USA, UK, India, Spain, Canada, China","Awards":"Won 3 Oscars. Another 128 wins & 200 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"8.3","imdbVotes":"451,579","imdbID":"tt8579674","Type":"movie","DVD":"25 Dec 2019","BoxOffice":"$159,227,644","Production":"Neal Street Productions, Amblin Entertainment","Website":"N/A","Response":"True"},
    {"Title":"The Irishman","Year":"2019","Rated":"R","Released":"27 Nov 2019","Runtime":"209 min","Genre":"Biography, Crime, Drama","Director":"Martin Scorsese","Writer":"Steven Zaillian (screenplay by), Charles Brandt (based upon the book by)","Actors":"Robert De Niro, Al Pacino, Joe Pesci, Harvey Keitel","Plot":"An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.","Language":"English, Italian, Latin, Spanish, German","Country":"USA","Awards":"Nominated for 10 Oscars. Another 73 wins & 334 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"7.8","imdbVotes":"335,425","imdbID":"tt1302006","Type":"movie","DVD":"27 Nov 2019","BoxOffice":"N/A","Production":"Tribeca Productions","Website":"N/A","Response":"True"}
    ]
    return(
        <div className="top-movies">
            <div className="top">
            <h1>more movies:</h1>
            <Link style={{textDecoration:"none  "} }  to="/search">
                <h1>search more</h1>
            </Link>
            </div>
            <div className="movies">
            {Moviesdata.map(movie=>(
                <SingleMovie data={movie} key={movie.Title} link={movie.imdbID}    title={movie.Title} img={movie.Poster} author={movie.Director} rate={movie.Ratings[0].Value} />
             ))}
            </div>
            
        </div>
    )
}

export default TopMovies;