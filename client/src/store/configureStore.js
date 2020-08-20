import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import projectsReducer from '../reducers/projects'
import employeesReducer from '../reducers/employees'
import logReducer from '../reducers/log'
const configureStore=()=>{
    const store=createStore(combineReducers({
          projects:projectsReducer,
          employees:employeesReducer,
          logs:logReducer

    }),applyMiddleware(thunk))

    return store
}
export default configureStore