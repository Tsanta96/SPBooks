import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //Used for debugging
import thunk from 'redux-thunk'; //Allows you to write action creators that return a function instead of an action
import RootReducer from '../reducers/root_reducer';

//Creates a Redux store that holds the complete state tree of the app (not much in our case)
const configureStore = (preloadedState = {}) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore;