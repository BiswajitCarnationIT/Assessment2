import logo from "./logo.svg";
import "./App.css";
import TopNewContainer from "./components/TopNewContainer";
import { Provider } from "react-redux";
import store from "./Store";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
