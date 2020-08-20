const logInitialState = []
const logReducer = ( state= logInitialState, action ) =>
{
    switch(action.type)
    {
        case 'SET_LOGS' : {
            console.log(111)
            return [...action.payload]
        }
        case 'ADD_LOG' : {
            console.log(22)
            return [...state, action.payload]
        }
        default : {
            console.log(999)
            return [...state]
        }
    }
}
export default logReducer