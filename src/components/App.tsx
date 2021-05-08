import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
    <BrowserRouter>
      <div className="app">
        <nav>
          <Navigation />
        </nav>
        <main>
          <UniversesList universes={universes} />
          <Switch>
            <Route exact path="/">
              {universes.length !== 0 ? (
                <Redirect to={"/" + universes[0].id} />
              ) : (
                <></>
              )}
            </Route>
            <Route path={pages.about_path}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Route>
            <Route path={pages.imprint_path}>
              <div>
                <h2>INFINITY</h2>
                <p>Endless space, Endless time</p>
                <p>+00 000 00 00 000</p>
                <p>info@infinity.com</p>
              </div>
            </Route>
            <Route path={pages.imprint_path}></Route>
            {universes.map((universe, i) => (
              <Route path={"/" + universe.id}>
                <Universe universe={universe} />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
