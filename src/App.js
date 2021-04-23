import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import RecomendedVideo from "./components/MainBody/RecomendedVideo";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResult from "./components/Search/SearchResult";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import PrivateRoute from "./utils/PrivateRoute";

const Routing = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/search/:searchId">
        <SearchResult />
      </PrivateRoute>
      <PrivateRoute exact path="/">
        <RecomendedVideo />
      </PrivateRoute>
    </Switch>
  );
};

function App() {
  const { toggle } = useSelector((state) => state.toggle);
  const [sb, setSb] = useState();

  useEffect(() => {
    setSb(toggle);
  }, [toggle]);

  // console.log("sb",sb)

  // console.log(toggle);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  return (
    <Router>
      {user ? (
        <div className="app">
          <div className="app__header">
            <Header />
          </div>
          <div className="app__body">
            <div className={`app__sidebar`}>
              <Sidebar />
            </div>
            <div className="app__mainBody">
              <Routing />
            </div>
          </div>
        </div>
      ) : (
        <Route exact path="/login">
          <Login />
        </Route>
      )}
    </Router>
  );
}

export default App;
