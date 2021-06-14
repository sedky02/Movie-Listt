import React, { useState } from "react";
function Input ({place, type,type2, text ,show ,p  }){
    const [toggle , setToggle ]=useState(false)
    const [value , setValue ]=useState("")
    return(
        <div className="input-container" >
            <input required type={toggle ? type2 : type} onChange={e=>setValue(e.target.value)} value={value} id={text}className="input-text" autoComplete="off" placeholder={place}  />
            <label htmlFor={text} className="label">
                <span class="content">{text}</span>
                <span className="toggle-pwd" onClick={()=>setToggle(!toggle)} >{value==="" ? "" : show}</span>
            </label>
        </div>
    );
}
export default Input;