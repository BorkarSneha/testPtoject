import axios from 'axios'
export const setEmployees=(employees)=>{
    return({
        type:'SET_EMPLOYEES',
        payload:employees
    })
}
export const startSetEmployees=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3025/employees')
        .then((response)=>{
            console.log(response.data,1)
            const employees=response.data
            dispatch(setEmployees(employees))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const addEmployee=(employee)=>{
    return({
        type:'ADD_EMPLOYEE',
        payload:employee
    })
}
export const startAddEmployee=(formData)=>{
    return(dispatch)=>{
        
        axios.post('http://localhost:3025/employees/new',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else
            {
                const employee=response.data
                dispatch(addEmployee(employee))
            }
           })
           .catch((err)=>{
               console.log(err)
           })
    }
}
