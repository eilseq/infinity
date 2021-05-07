import React, { useState } from "react";
import { pages } from "../constants";
import Universe from "./Universe";
import "./App.sass";

function App() {
  const [selectedPage, setSelectedPage] = useState(pages.universe_id);
  return (
    <div className="app">
      <nav>
        <div id="logo">
          <h1>infinity</h1>
        </div>
        <div
          className={
            selectedPage === pages.universe_id ? "selected" : "unselected"
          }
          onClick={() => setSelectedPage(pages.universe_id)}
        >
          Universe
        </div>
        <div
          className={
            selectedPage === pages.about_id ? "selected" : "unselected"
          }
          onClick={() => setSelectedPage(pages.about_id)}
        >
          About
        </div>
        <div
          className={
            selectedPage === pages.imprint_id ? "selected" : "unselected"
          }
          onClick={() => setSelectedPage(pages.imprint_id)}
        >
          Imprint
        </div>
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

const Page = (props) => <div>{props.children}</div>;

const Router = ({ selectedPage, children }) =>
  children.find((page) => page.props.id == selectedPage);

export default App;
