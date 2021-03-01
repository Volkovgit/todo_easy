import todoReducer from './todoReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todoItems:todoReducer,
})

export default rootReducer;