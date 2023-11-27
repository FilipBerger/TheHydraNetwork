
import Feed from "./components/Feed"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Register from "./components/Register";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
