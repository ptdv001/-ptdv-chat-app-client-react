import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { App } from './components/App';

const allStoreEnhancers = compose(
    applyMiddleware(thunk), // Note: Needs to be first - allows Async/Sync ops?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Redux Store - single source of truth for app state
// Note: "In Redux, all the application state is stored as a single object"
// "What's the minimal representation of your app's state as an object?"
const store = createStore(
    rootReducer,
    //preloadedState, - done in reducer
    allStoreEnhancers
);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

// TODO learn about this
//
// import * as serviceWorker from './serviceWorker';
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
