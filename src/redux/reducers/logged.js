const loggedReducer = (state=false , action )=>{
    switch (action.type) {
        case 'sign_in':
            
            return action.payload==="false"? state :   !state ;
    
        default:
            return state;
    }
}
export default loggedReducer;