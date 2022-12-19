import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count'
import thunk from 'redux-thunk'
import personReducer from './reducers/person'

//h
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))
