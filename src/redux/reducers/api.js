const queryReducer = (state= "", action )=>{
    switch (action.type) {
        case 'query':
            
            return  action.payLoad ;
    
        default:
            return state;
    }
}
export default queryReducer;