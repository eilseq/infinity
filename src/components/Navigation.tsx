import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../constants";

export const Navigation = () => (
  <>
    <div id="logo">
      <h1>infinity</h1>
    </div>
    <div>
      <Link to={pages.universes_path}>Universes</Link>
    </div>
    <div>
      <Link to={pages.about_path}>About</Link>
    </div>
    <div>
      <Link to={pages.imprint_path}>Imprint</Link>
    </div>
  </>
);
