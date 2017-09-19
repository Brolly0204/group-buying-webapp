import {createStore, compose} from 'redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// __DEV__ && composeEnhancers()
// 如果__DEV__为true (开发环境) 再启用devtools
export default createStore(reducer, __DEV__ && composeEnhancers())