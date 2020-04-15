import {combineReducers, createStore} from 'redux';

import reducersDucks from './ducks';

const reducer = combineReducers(reducersDucks);

let store = createStore(reducer);
export {store};
