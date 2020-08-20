import React from 'react'
import {startAddEmployee} from '../../actions/employees'
import {connect} from 'react-redux'
class EmployeesForm extends React.Component{
  constructor(){
      super()
      this.state={
          name:''
      }
  }
  
handleSubmit = (e) =>{
    e.preventDefault()
    const formData=
    {
        name:this.state.name
    }
 this.props.dispatch(startAddEmployee(formData))
   }
   
handleChange=(e)=>{
    this.setState({ 
        [e.target.name]:e.target.value 
    })
   }
   
render(){
    return(
       <div className="form-group">
           <div className="row">
            <div className="col-md-6 offset-md-3">
           <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">
                  Name    
              </label> 
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"/>
              <br/>
              <input type="submit" class="btn btn-primary btn-lg btn-block"/>
          </form>
       </div> 
       </div>
       </div>
    )
}
}

const mapStateToProps = ( state ) =>
{
    return({
        employees : state.employees
    })
}
export default connect(mapStateToProps)(EmployeesForm)
