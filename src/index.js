import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const myStore = createStore(
  allReducers,
  window._REDUX_DEVTOOLS_RXTENSIN_ && window._REDUX_DEVTOOLS_RXTENSIN_()
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// STORE -> GLOBALIZED STATE

// ACTION INCREMENT
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// REDUCER
// let store = createStore(counter);

// Display it in the console
// store.subscribe(() => console.log(store.getState()))

// DISPATCH
// store.dispatch(increment())
