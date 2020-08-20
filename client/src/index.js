import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {Provider} from 'react-redux'
import App from './App'

import configureStore from './store/configureStore'

import {startSetEmployees} from './actions/employees'
import {startSetProjects} from './actions/projects'
import {startSetLogs} from './actions/log'


const store=configureStore()

store.dispatch(startSetEmployees())
store.dispatch(startSetProjects())
store.dispatch(startSetLogs())

store.subscribe(()=>{
    console.log(store.getState())
})
const ele=(
    <Provider store = {store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));



