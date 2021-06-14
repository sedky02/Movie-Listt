const activeReducer = (state="home" , action )=>{
    switch (action.type) {
        case 'active':
            
            return action.payLoad ;
    
        default:
            return state;
    }
}
export default activeReducer;