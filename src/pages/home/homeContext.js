import React,{ createContext} from 'react';
export const HomeConetext = createContext();
export const HomeProvider = (props)=>{
    const Moviesdata= [
        {"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi, Thriller","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"USA, UK","Awards":"Won 4 Oscars. Another 153 wins & 220 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"2,099,831","imdbID":"tt1375666","Type":"movie","DVD":"20 Jun 2013","BoxOffice":"$292,576,195","Production":"Syncopy, Warner Bros.","Website":"N/A","Response":"True"},
        {"Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow","Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.","Language":"English","Country":"USA, UK, Canada","Awards":"Won 1 Oscar. Another 43 wins & 148 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"72%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.6","imdbVotes":"1,544,189","imdbID":"tt0816692","Type":"movie","DVD":"24 May 2016","BoxOffice":"$188,020,017","Production":"Syncopy, Lynda Obst Productions","Website":"N/A","Response":"True"},
        {"Title":"1917","Year":"2019","Rated":"R","Released":"10 Jan 2020","Runtime":"119 min","Genre":"Drama, Thriller, War","Director":"Sam Mendes","Writer":"Sam Mendes, Krysty Wilson-Cairns","Actors":"Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth","Plot":"April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.","Language":"English, French, German","Country":"USA, UK, India, Spain, Canada, China","Awards":"Won 3 Oscars. Another 128 wins & 200 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"8.3","imdbVotes":"451,579","imdbID":"tt8579674","Type":"movie","DVD":"25 Dec 2019","BoxOffice":"$159,227,644","Production":"Neal Street Productions, Amblin Entertainment","Website":"N/A","Response":"True"},
        {"Title":"The Irishman","Year":"2019","Rated":"R","Released":"27 Nov 2019","Runtime":"209 min","Genre":"Biography, Crime, Drama","Director":"Martin Scorsese","Writer":"Steven Zaillian (screenplay by), Charles Brandt (based upon the book by)","Actors":"Robert De Niro, Al Pacino, Joe Pesci, Harvey Keitel","Plot":"An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.","Language":"English, Italian, Latin, Spanish, German","Country":"USA","Awards":"Nominated for 10 Oscars. Another 73 wins & 334 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"7.8","imdbVotes":"335,425","imdbID":"tt1302006","Type":"movie","DVD":"27 Nov 2019","BoxOffice":"N/A","Production":"Tribeca Productions","Website":"N/A","Response":"True"},
        {"Title":"The Invisible Guest","Year":"2016","Rated":"TV-MA","Released":"06 Jan 2017","Runtime":"106 min","Genre":"Crime, Drama, Mystery, Thriller","Director":"Oriol Paulo","Writer":"Oriol Paulo","Actors":"Mario Casas, Ana Wagener, Jose Coronado, Bárbara Lennie","Plot":"A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.","Language":"Spanish","Country":"Spain","Awards":"2 wins & 3 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"67%"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"149,344","imdbID":"tt4857264","Type":"movie","DVD":"09 Jul 2017","BoxOffice":"N/A","Production":"Atresmedia Cine, Nostromo Pictures","Website":"N/A","Response":"True"},        {"Title":"Catch Me If You Can","Year":"2002","Rated":"PG-13","Released":"25 Dec 2002","Runtime":"141 min","Genre":"Biography, Crime, Drama","Director":"Steven Spielberg","Writer":"Jeff Nathanson (screenplay), Frank Abagnale Jr. (book), Stan Redding (book)","Actors":"Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen","Plot":"Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.","Language":"English, French","Country":"USA, Canada","Awards":"Nominated for 2 Oscars. Another 16 wins & 44 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"8.1","imdbVotes":"850,401","imdbID":"tt0264464","Type":"movie","DVD":"01 Aug 2013","BoxOffice":"$164,615,351","Production":"Parkes/MacDonald, DreamWorks SKG, Amblin Entertainment, Splendid Pictures","Website":"N/A","Response":"True"},
        {"Title":"Ready Player One","Year":"2018","Rated":"PG-13","Released":"29 Mar 2018","Runtime":"140 min","Genre":"Action, Adventure, Sci-Fi","Director":"Steven Spielberg","Writer":"Zak Penn (screenplay by), Ernest Cline (screenplay by), Ernest Cline (based on the novel by)","Actors":"Tye Sheridan, Olivia Cooke, Ben Mendelsohn, Lena Waithe","Plot":"When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.","Language":"English","Country":"USA, India","Awards":"Nominated for 1 Oscar. Another 11 wins & 55 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"72%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"7.4","imdbVotes":"377,701","imdbID":"tt1677720","Type":"movie","DVD":"05 Apr 2018","BoxOffice":"$137,690,172","Production":"RatPac-Dune Entertainment, Warner Bros., Village Roadshow Pictures, Amblin Entertainment, De Line Pictures","Website":"N/A","Response":"True"},
        {"Title":"Avengers: Endgame","Year":"2019","Rated":"PG-13","Released":"26 Apr 2019","Runtime":"181 min","Genre":"Action, Adventure, Drama, Sci-Fi","Director":"Anthony Russo, Joe Russo","Writer":"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora & Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)","Actors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth","Plot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.","Language":"English, Japanese, Xhosa, German","Country":"USA","Awards":"Nominated for 1 Oscar. Another 69 wins & 109 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"78/100"}],"Metascore":"78","imdbRating":"8.4","imdbVotes":"856,408","imdbID":"tt4154796","Type":"movie","DVD":"30 Jul 2019","BoxOffice":"$858,373,000","Production":"Marvel Studios, Walt Disney Pictures","Website":"N/A","Response":"True"}
         
    ]
    return(
        <HomeConetext.Provider value={
            Moviesdata
             } >
            {props.children}
        </HomeConetext.Provider>
    );
}