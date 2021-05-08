import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { addUniverseackground } from "../webgl/galaxy";
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

  useEffect(() => {
    addUniverseackground(container.current);
    getStars().then((res) =>
      setStars(res.data.filter((star) => star.universeId === universe.id))
    );
  }, [universe]);

  return (
    <>
      <div ref={container} className="universe"></div>
      {stars.map((star, i) => (
        <div key={i} style={{ color: star.color }}>
          <h1>{star.name}</h1>
        </div>
      ))}
    </>
  );
}
