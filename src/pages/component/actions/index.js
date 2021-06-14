export const darker = ()=>{
    return{
        type:'darker'
    };
};
export const loggin = (type)=>{
    return{
        type:'sign_in',
        payload:type
        
    };
};
export const activate = (nom)=>{
    return{
        type:'active',
        payLoad : nom
    };
};
