import React from "react"; 
function Note({text = "successfully Logged in" , className="success"}){
    
    return(
        <div className={`note ${className} `}>
            <h2>{text}</h2>
        </div>
    )
}
export default Note;