const employeesInitialState=[]

const employeesReducer=(state=employeesInitialState,action)=>{
  
    switch(action.type){
        
        case 'SET_EMPLOYEES':{
            return [...action.payload]
        }
        case 'ADD_EMPLOYEE':{
            return [...state,action.payload]
        }
        default:{
            
            return [...state]
        }
    }

}
export default employeesReducer