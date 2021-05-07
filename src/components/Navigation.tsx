import React from "react";
import { pages } from "../constants";
import "./Navigation.sass";

export const Menubar = ({ selectedPage, onSelection }) => (
  <>
    <div id="logo">
      <h1>infinity</h1>
    </div>
    <div
      className={selectedPage === pages.universe_id ? "selected" : "unselected"}
      onClick={() => onSelection(pages.universe_id)}
    >
      Universe
    </div>
    <div
      className={selectedPage === pages.about_id ? "selected" : "unselected"}
      onClick={() => onSelection(pages.about_id)}
    >
      About
    </div>
    <div
      className={selectedPage === pages.imprint_id ? "selected" : "unselected"}
      onClick={() => onSelection(pages.imprint_id)}
    >
      Imprint
    </div>
  </>
);

export const Page = (props) => <div>{props.children}</div>;

export const Router = ({ selectedPage, children }) =>
  children.find((page) => page.props.id == selectedPage);
