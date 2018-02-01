
import { createStore } from 'redux'


import { combineReducers, applyMiddleware, compose } from 'redux'

import { exampleReducer } from './reducers';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';


import createHistory from 'history/createHashHistory';

const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    example: exampleReducer,
    router: routerReducer
});

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(routerMiddleware(history))
    )
);

export {store, history};
