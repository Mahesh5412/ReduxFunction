import reducer from '../reducers'
import { createStore, combineReducers } from 'redux';
// const store=createStore(reducer)
console.log('I will run after every render3333');
let store = createStore(combineReducers({ reducer: reducer }));

export default store