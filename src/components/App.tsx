import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { pages } from "../constants";
import { Universe, UniversesList } from "./Universe";
import { Navigation } from "./Navigation";
import { getUniverses } from "../helpers";

function App() {
  const [universes, setUniverses] = useState([]);

  useEffect(() => {
    getUniverses().then((res) => setUniverses(res.data));
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <Navigation />
        </nav>
        <main>
          <UniversesList universes={universes} />
          <Switch>
            <Route path={pages.about_path}></Route>
            <Route path={pages.imprint_path}></Route>
            {universes.map((universe, i) => (
              <Route path={"/" + universe.id}>
                <Universe universe={universe} />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
