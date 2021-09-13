import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Login from "./components/login/Login";
import Logout from "./components/logout/logout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/send_email" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
