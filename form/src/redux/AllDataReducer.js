const initialState ={
    name:'',
    email:'',
    Password:'',
}

const AllDataReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'MYDATA' :
            return action.payload
            default:
                return state
    }
}

export default AllDataReducer