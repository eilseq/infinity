import React, { useState } from "react";
import { pages } from "../constants";
import Universe from "./Universe";
import { Menubar, Router, Page } from "./Navigation";
import "./App.sass";

function App() {
  const [selectedPage, setSelectedPage] = useState(pages.universe_id);
  return (
    <div className="app">
      <nav>
        <Menubar selectedPage={selectedPage} onSelection={setSelectedPage} />
      </nav>
      <main>
        <Router selectedPage={selectedPage}>
          <Page id={pages.universe_id}></Page>
          <Page id={pages.about_id}></Page>
          <Page id={pages.imprint_id}></Page>
        </Router>
        <Universe />
      </main>
    </div>
  );
}

export default App;
