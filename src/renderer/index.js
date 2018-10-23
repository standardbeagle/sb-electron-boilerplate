// Initial welcome page. Delete the following line to remove it.
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import RedBox from 'redbox-react';

import { store, history } from "./store";
import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>Standard beagle basic electron app</h1>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>
);

const root = document.getElementById("app");
let render = () => {
  ReactDOM.render(<App />, root);
}

console.log({hot: module.hot})

if (module.hot) {
  const renderApp = render;
  const renderError = (error) => {
      ReactDOM.render(
          <RedBox error={error} />,
          rootEl,
      );
  };

  render = () => {
      try {
          renderApp();
      }
      catch(error) {
          renderError(error);
      }
  };

  module.hot.accept();

}

render();
