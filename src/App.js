import "./App.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Route from "./route/Route";
import { store } from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Route />
      <ToastContainer />
    </Provider>
  );
}

export default App;
