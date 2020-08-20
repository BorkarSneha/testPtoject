import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import './App.css';

import ProjectsList from './components/projects/ProjecstList'
import ProjectsForm from './components/projects/ProjectsForm'
import EmployeesList from './components/employees/employeesList'
import Dashboard from './components/Dashboard'
import Log from './components/log'
import './sidebar.css'
function App() {
  return (
    <BrowserRouter>
    <div>
     <nav class="navbar navbar-dark bg-dark fixed-top flex-md-nowrap p-0 shadow">
     <a class="navbar-brand col-sm-3 col-md-2 mr-0 "href="#">Your Company</a>
      <input type="text" class="form-control from-control-primary w-100" placeholder="Search"/>
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">Log Time</a>
          </li>
        </ul>
    </nav>
  <div>
  <div class="container-fluid">
  <div class="row">
  <div class="col-sm-3 col-md-2 sidebar">
     <ul class="left-sidebar">
       <li class="active"><Link to="/dashboard">Dashboard</Link></li>
       <li><Link to="/employees">Employees</Link></li>
       <li><Link to="/projects">Projects</Link></li>
       <li><Link to="/log">Log Time</Link></li>
     </ul>
  </div>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Dashboard</h1>
         ...
  </div>
  </div>
  </div>
  </div>


<div class="col-md-9 ml-sm-auto col-lg-10 px-4">
  
   <Switch>
    <Route path = "/dashboard" component = {Dashboard}/>
    <Route path = "/employees" component = {EmployeesList}/>
    <Route path = "/projects/new" component = {ProjectsForm}/>
    <Route path = "/projects" component = {ProjectsList} />
    <Route path = "/log" component = {Log}/>
   </Switch>
   
   </div>
     <div class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <nav aria-label="Page navigation example">
       <ul class="pagination justify-content-start">
           <li class="page-item disabled">
           <a class="page-link" href="" tabindex="-1">Previous</a>
           </li>
           <li class="page-item"><a class="page-link" href="/dashboard">1</a></li>
           <li class="page-item"><a class="page-link" href="/employees">2</a></li>
           <li class="page-item"><a class="page-link" href="/projects">3</a></li>
           <li class="page-item"><a class="page-link" href="/log">4</a></li>
           <li class="page-item">
           <a class="page-link" href="#">Next</a>
           </li>
      </ul>
    </nav>
  </div>
</div>
</BrowserRouter>
  );
}

export default App;
