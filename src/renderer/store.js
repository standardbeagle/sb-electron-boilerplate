import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import { createEpicMiddleware } from 'redux-observable';
import epic from "./epic";

const epicMiddleware = createEpicMiddleware();

import rootReducer from "./reducer";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  undefined,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      logger,
      epicMiddleware
    )
  )
);

epicMiddleware.run(epic);

export { store, history, epicMiddleware };
