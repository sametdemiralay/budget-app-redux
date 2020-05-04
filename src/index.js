import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
 <Provider store={store}>
  <React.StrictMode>
   <App />
  </React.StrictMode>
 </Provider>,
 document.getElementById("root")
);

serviceWorker.unregister();