const dataReducer = (state={} , action )=>{
    switch (action.type) {
        case 'data':
            
            return  action.payLoad ;
    
        default:
            return state;
    }
}
export default dataReducer;