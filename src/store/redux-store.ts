import { createStore, compose, applyMiddleware } from 'redux';
import users from './usersReducer';
import thunkMiddleWare from 'redux-thunk';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    users,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
);

export default store;