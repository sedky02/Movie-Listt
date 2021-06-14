export const setQuery = (e)=>{
    return{
        type:'query',
        payLoad: e
    };
};
export const setData = (e)=>{
    return{
        type:'data',
        payLoad: e
    };
};