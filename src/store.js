import { createStore } from 'redux';
import rootReducer from  './reducers';
//Grab the data from localStorage if it exists
const localState = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : {};
export default(initialState) => {
    return createStore(rootReducer, localState, initialState);
}