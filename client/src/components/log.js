import React from 'react'
import { connect } from 'react-redux'
import { startAddLog } from '../actions/log'
class Log extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            date : '',
            time : '',
            project : '',
            employee : ''
        }
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            date : this.state.date,
            time : this.state.time,
            project : this.state.project,
            employee : this.state.employee
        }
        this.props.dispatch(startAddLog(formData))
    }
    handleChange = (e) =>
    {
        console.log(e.target.value, e.target.name)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <div className="form-group"  className="col-md-6 offset-md-3">
                
                <div align="center"><h4>Log Time</h4></div>
                <form onSubmit = {this.handleSubmit}>
                <label htmlFor = "date">Date</label>
                            <input type = "text"value = {this.state.date} name = "date"  id = "date" placeholder = "dd/mm/yyyy" onChange = {this.handleChange} className="form-control"/>
                <label htmlFor = "time">Time Logged</label>
                            <input type = "text" value = {this.state.time} name = "time" id = "time" placeholder = "time" onChange = {this.handleChange} className="form-control"/>
                <label htmlFor = "project">Select Project</label><br/>
                    <select onChange = {this.handleChange} name = "project" className="form-control">
                       {
                            this.props.projects.map(proj =>
                                {
                                    return(
                                        <option key = {proj._id} value = {proj._id}>{proj.name}</option>
                                    )
                                })
                        }
                    </select>
                <label htmlFor = "emp">Select Employee</label><br/>
                    <select onChange = {this.handleChange} name = "employee" className="form-control">
                        {
                            this.props.employees.map(emp =>
                                {
                                    return(
                                        <option key = {emp._id} value = {emp._id}>{emp.name}</option>
                                    )
                                })
                        }
                    </select> <br/>
                <input type = "submit"  class="btn btn-primary btn-lg btn-block"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    return({
        projects : state.projects,
        employees : state.employees
    })
}

export default connect(mapStateToProps)(Log)
