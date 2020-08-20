import React from 'react'
import EmployeesForm from './employeesForm'
import { connect } from 'react-redux'

function EmployeesList(props)
{
    return(
            <div className="col-md-6 offset-md-3" align="center">
             <table class="table">
                 <thead>
                  <tr>
                   <th scope="col" align="center">Name</th>
                 </tr>
                </thead>
                  <tbody>
                    {
                    props.employees.map(emp =>
                  {
                     return(
                        <tr key = {emp._id}>
                        <td>{emp.name}</td>
                         </tr>
                        )
                 })
                  }
                </tbody>
                </table>
                <EmployeesForm/>
            </div>
        )
}
const mapStateToProps = ( state ) =>
{
    return({
        employees : state.employees
    })

}
export default connect(mapStateToProps)(EmployeesList)