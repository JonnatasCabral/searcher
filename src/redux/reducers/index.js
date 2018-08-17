import { combineReducers } from 'redux'
import result from './fetchResults'

const storeApp = combineReducers({
	'result': result
})

export default storeApp;