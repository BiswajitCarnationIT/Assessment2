import logo from "./logo.svg";
import "./App.css";
import TopNewContainer from "./components/TopNewContainer";
import { Provider } from "react-redux";
import store from "./Store";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";


store.subscribe(()=> console.log(store.getState()));

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <TopNewContainer />
        <Router/> 
      </Provider> */}

      <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </div>
  );
}

export default App;
