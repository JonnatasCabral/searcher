import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './components/App';
import storeApp from './redux/index'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(storeApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
