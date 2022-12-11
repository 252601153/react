import {legacy_createStore as createStore} from 'redux'
import countReducer from './count-reducer'

export default createStore(countReducer)
