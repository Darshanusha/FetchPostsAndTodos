import postReducer from './postReducer';
import toDoReducer from './toDoReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    todos: toDoReducer,
    posts: postReducer
})