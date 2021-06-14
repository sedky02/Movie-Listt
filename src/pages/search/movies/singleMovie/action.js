export const getList = (movie)=>{
    return{
        type:'list',
        payLoad : movie
    };
};
export const removeList = (movie)=>{
    return{
        type:'remove_list',
        payLoad : movie
    };
};