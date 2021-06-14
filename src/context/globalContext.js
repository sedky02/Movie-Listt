import React,{useState , createContext} from 'react';
export const globalConetext = createContext();
export const GlobalProvider = (props)=>{
    const [active , setActive] = useState('home');
    const [dark , setDark] = useState(false);
    const [logged , setLogged] = useState(false);
    
    return(
        <globalConetext.Provider value={
             { activator : [active, setActive],
                darker : [dark, setDark],
                isLogged :[logged, setLogged]
            } 
             } >
            {props.children}
        </globalConetext.Provider>
    );
}