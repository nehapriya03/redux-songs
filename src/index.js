import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import combinedReducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(combinedReducers)}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
