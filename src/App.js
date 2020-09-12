import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import RecommendedVideos from "./components/Recommended/Recommended.component";
import SearchPage from "./components/SearchPage/SearchPage.component";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <div className="app__page">
                  <Sidebar />
                  <RecommendedVideos />
                </div>
              </>
            )}
          />
          <Route
            exact
            path="/search/:searchParam"
            render={() => (
              <>
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
