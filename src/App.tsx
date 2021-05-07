import React, { useState } from "react";
import { pages } from "./constants";
import Universe from "./Universe";
import "./App.sass";

function App() {
  const [selectedPage, setSelectedPage] = useState(pages.universe_id);
  return (
    <div className="app">
      <nav>
        <div id="logo">logo</div>
        <div onClick={() => setSelectedPage(pages.universe_id)}>Universe</div>
        <div onClick={() => setSelectedPage(pages.about_id)}>About</div>
        <div onClick={() => setSelectedPage(pages.imprint_id)}>Imprint</div>
      </nav>
      <h1>infinity</h1>
      <main>
        <Router selectedPage={selectedPage}>
          <Page id={pages.universe_id}>
            <h2>Universes</h2>
            <Universe />
          </Page>
          <Page id={pages.about_id}>
            <h2>About</h2>
          </Page>
          <Page id={pages.imprint_id}>
            <h2>Imprint</h2>
          </Page>
        </Router>
      </main>
    </div>
  );
}

const Page = (props) => <div>{props.children}</div>;

const Router = ({ selectedPage, children }) =>
  children.find((page) => page.props.id == selectedPage);

export default App;
