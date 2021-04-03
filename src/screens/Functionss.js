import React from "react";
import { Link } from "react-router-dom";
import Function1 from "../functions/Function1";
import Function2 from "../functions/Function2";
import Function3 from "../functions/Function3";

export default function Functionss() {
  return (
    <div>
      <Link to="./">Go Home</Link>
      <Link to="./inputss" style={{marginLeft: 15}}>Go To Inputs</Link>
      <h1>Functions</h1>
      <Function1 />
      <Function2 />
      <Function3 />
    </div>
  );
}
