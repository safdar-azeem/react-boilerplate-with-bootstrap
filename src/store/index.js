import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./reducers/userReducer"

const rootReducer = combineReducers({
	userReducer: userReducer,
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
