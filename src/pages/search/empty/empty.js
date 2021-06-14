import React from "react";
import { useSelector } from "react-redux";

function Empty({img="find", text="you can search any movie you want!",c="", className=""}){
    const isDark= useSelector(state => state.darkReducer)

    return(
        <div className={`empty ${c}`}>
            <img src={`images/${img}.png`}  className={  isDark ? "dark-img " + className : className} alt="find" />
            <p>{text}</p>
        </div>
    );
}
export default Empty;