import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant()
    )
  )
);
