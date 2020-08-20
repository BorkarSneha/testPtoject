import axios from 'axios'
export const setProjects=(projects)=>{
    return({
        type:'SET_PROJECTS',
        payload:projects
    })
}
export const startSetProjects=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3025/projects')
        .then((response)=>{
            const projects=response.data
            dispatch(setProjects(projects))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const addProject=(project)=>{
    return({
        type:'ADD_PROJECT',
        payload:project
    })
}
export const startAddProject=(formData)=>{
    return(dispatch)=>{
     
        axios.post('http://localhost:3025/projects/new',formData)
       
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else
            {
                console.log(response.data,1)
                const project=response.data
                dispatch(addProject(project))
            }   
           })
           .catch((err)=>{
               alert(err)
           })
    }
}
