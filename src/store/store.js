
import { legacy_createStore } from 'redux';
import rooterReducer from '../rootReducer/rootReducer';





const store=legacy_createStore(rooterReducer);

export default store