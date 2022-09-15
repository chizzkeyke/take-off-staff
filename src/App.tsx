import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RoutesApp from "./routes";
import "./App.css";

function App() {
  return (
     <Provider store={store}>
        <RoutesApp />
     </Provider>
  );
}

export default App;
