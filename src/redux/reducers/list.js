const listReducer = (state=[] , action )=>{
    switch (action.type) {
        case 'list':
            
            return  [ ...state,  action.payLoad] ;
    
        case 'remove_list':
            
            return state.filter(movie=> movie!==action.payLoad); 
    
        default:
            return state;
    }
}
export default listReducer;