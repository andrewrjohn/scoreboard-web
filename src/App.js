import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Scoreboard from "./components/Scoreboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="h-screen w-full bg-black text-white flex">
        <Navbar />
        <Switch>
          <Route path={["/mlb", "/nfl", "/nba", "/"]}>
            <Scoreboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
