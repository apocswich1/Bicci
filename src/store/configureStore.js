import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';

import rootReducer from 'reducers';

// const loggerMiddleware = createLogger();

const saveState = (state) => {
  const mistate = state;
  localStorage.setItem('GLOBAL_STATE', JSON.stringify(mistate));
}

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware]; // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  //const store = createStore(rootReducer, preloadedState, composedEnhancers);

  const globalState = localStorage.getItem('GLOBAL_STATE');

  //console.log(globalState);

  const initialState = (globalState!=null) ? JSON.parse(globalState) : undefined;

  preloadedState = initialState;

  console.log(initialState);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  store.subscribe(() => {
    saveState(store.getState());
  });
  //const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
