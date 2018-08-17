import { createStore} from 'redux'
import storeApp from './reducers/index'


const store = createStore(storeApp);

export default store;