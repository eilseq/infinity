import React from "react";
import "./App.sass";

function App() {
  let a: number = 6 + 1;
  console.log("loading");
  if (a === 7) console.log("and computing");

  return (
    <div className="app">
      <h1>Hello World!</h1>;
    </div>
  );
}

export default App;
