import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pages } from "../constants";

export const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div id="logo">
        <h1>infinity</h1>
      </div>
      <div className={pathname.match(/\d\d\d/g) ? "selected" : "unselected"}>
        <Link to={pages.universes_path}>Universes</Link>
      </div>
      <div
        className={pathname === pages.about_path ? "selected" : "unselected"}
      >
        <Link to={pages.about_path}>About</Link>
      </div>
      <div
        className={pathname === pages.imprint_path ? "selected" : "unselected"}
      >
        <Link to={pages.imprint_path}>Imprint</Link>
      </div>
    </>
  );
};
