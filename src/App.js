import logo from "./logo.svg";
import "./App.css";
import TopNewContainer from "./components/TopNewContainer";
import { Provider } from "react-redux";
import store from "./Store";

store.subscribe(()=> console.log(store.getState()));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TopNewContainer />
      </Provider>
    </div>
  );
}

export default App;
