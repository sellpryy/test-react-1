import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from '../reducers/apiReducer'; 

const rootReducer = combineReducers({
    api: apiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
