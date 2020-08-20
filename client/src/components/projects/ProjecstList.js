import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ProjectsList(props)
{
    return(
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Total Estimate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.projects.map(proj =>
                            {
                                return(
                                    <tr key = {proj._id}>
                                        <td>{proj.name}</td>
                                        <td>{proj.totalEstimate}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
           <Link to = "/projects/new">Add Project</Link>
        </div>
    )
}
const mapStateToProps = ( state ) =>
{
    return({
        projects : state.projects
    })
}
export default connect(mapStateToProps)(ProjectsList)