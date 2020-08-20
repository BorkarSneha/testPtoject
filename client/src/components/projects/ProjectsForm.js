import React from 'react'
import {startAddProject} from '../../actions/projects'
import {connect} from 'react-redux'
class ProjectsForm extends React.Component{
  constructor(){
      super()
      this.state={
          name:'',
          totalEstimate:''
      }
  }
  

handleSubmit = (e) =>{
    e.preventDefault()
    const formData={
        name:this.state.name,
        totalEstimate:this.state.totalEstimate
    }
 this.props.dispatch(startAddProject(formData))
   }
   
handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
   
render(){
    return(
        <div>
       <div className="form-group">
           <div className="row">
            <div className="col-md-6 offset-md-3">
           <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">
                  Name    
              </label> 
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"/>
              <br/>
              <label htmlFor="TotalEstimate">
                  totalEstimate
              </label> 
              <input type="text" value={this.state.totalEstimate}  onChange={this.handleChange} name="totalEstimate"  className="form-control"/>
              <br/>
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
          </form>
       </div> 
       </div>
       </div></div>
    )
}
}
export default connect()(ProjectsForm)
