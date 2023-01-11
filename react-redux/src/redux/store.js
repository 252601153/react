import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count-reducer'
import thunk from 'redux-thunk'
import personReducer from './reducers/person-reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

//合并Reducer
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
