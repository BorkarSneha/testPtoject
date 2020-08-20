import React from 'react'
import { connect } from 'react-redux'
class Dashboard extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            emp : '',
            proj : '',
            logs : []
        }
    }
    
    handleChange = (e) =>
    {
        console.log(e.target.value)
        if(e.target.value == 'projAll' || e.target.value == 'empAll')
        {
            this.setState({
                [e.target.name] : e.target.value,
                logs : this.props.log
            })
        }
       else
       {
           const id = e.target.value
           if(e.target.name == 'proj')
           {
               const x = this.props.logs.filter(log => log.project._id == id)
           }
           else
           {
               const y = this.props.logs.filter(log => log.employee._id == id)
           }
       }
    }
    render()
    {
        return(
            <div>
                <h3>Dashboard</h3>
                <div align="right">
                <label>Projects</label>
                
                <select onChange = {this.handleChange} name = "proj">
                    <option value = "projAll">all</option>
                    {
                        this.props.projects.map(proj =>
                            {
                                return(

                                    <option key = {proj._id} value = {proj._id}>{proj.name}</option>

                                )
                            })
                    }
                </select>
                <label>Employees</label>
                <select onChange = {this.handleChange} name = "emp">
                <option value = "all">all</option>
                {
                    this.props.employees.map(emp =>
                        {
                            return(
                                <option key = {emp._id} value = {emp._id}>{emp.name}</option>
                            )
                        })
                }
            </select>
            </div>
            <h3>Project Status</h3>
     <div>
         
     </div>
    
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Date</th>
                        <th scope="col">Logged Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.logs.map(log =>
                            {
                                return(
                                    <tr key = {log._id}>
                                        <td>{log.project.name}</td>
                                        <td>{log.employee.name}</td>
                                        <td>{log.date}</td>
                                        <td>{log.time}</td>
                                    </tr>
                                )
                            })   
                    }
                </tbody>
            </table>
        </div>
    )
}}
const mapStateToProps = ( state ) =>
{
    return({
        projects : state.projects,
        employees : state.employees,
        logs:state.logs
    })
}
export default connect(mapStateToProps)(Dashboard)