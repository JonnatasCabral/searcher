import { combineReducers } from 'redux'
import results from './fetchResults'

const storeApp = combineReducers({
	'test': results
})

export default storeApp;