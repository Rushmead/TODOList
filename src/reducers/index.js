import tasks from './tasks';
import { combineReducers } from 'redux';
//Make our reducer
const rootReducer = combineReducers({
    tasks,
});
export default rootReducer;