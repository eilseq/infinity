import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { createUniverse } from "../webgl/galaxy";
import { getStars } from "../helpers";

export const UniversesList = ({ universes }) => {
  const { pathname } = useLocation();
  const id = pathname.replace("/", "");
  return (
    <div id="universes">
      {universes.map((universe, i) => (
        <div key={i}>
          <Link to={"/" + universe.id}>
            <h1 className={id == universe.id ? "selected" : "unselected"}>
              {universe.name}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export function Universe({ universe }) {
  const [stars, setStars] = useState([]);
  const container = useRef(null);
  const stopLast = useRef(null);

  useEffect(() => {
    if (stopLast.current) stopLast.current();

    const { domElement, start, stop } = createUniverse();
    stopLast.current = stop;

    container.current.innerHTML = "";
    container.current.appendChild(domElement);

    getStars().then((res) =>
      setStars(res.data.filter((star) => star.universeId === universe.id))
    );
    start();
  }, [universe]);

  return (
    <>
      <div ref={container} className="universe"></div>
      <div className="stars">
        {stars.map((star, i) => (
          <div key={i}>
            <div style={{ background: star.color }}> </div>
            <h1>{star.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
