import { combineReducers } from 'redux';
import { chatApp } from './chat-reducer';

const rootReducer = combineReducers({
    chatApp
});

export { rootReducer };
