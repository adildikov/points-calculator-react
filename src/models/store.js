import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./index";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */
const sagaMiddleware = createSagaMiddleware();
const configureStore = (preloadedStore) =>
  createStore(
    rootReducer,
    preloadedStore,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;