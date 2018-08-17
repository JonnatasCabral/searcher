import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import storeApp from './reducers/index'


const store = createStore(
	storeApp,
	applyMiddleware(thunk)
	);

export default store;