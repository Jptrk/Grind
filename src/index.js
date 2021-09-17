import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// Thunk
import thunk from "redux-thunk";
// Reducers
import rootReducer from "../src/reducers/root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
