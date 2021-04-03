import React from "react";
import { Link } from "react-router-dom";

export default function Inputss() {
  return (
    <div>
      <Link to="./functions">Go To Functions</Link>
      <Link to="./" style={{ marginLeft: 15 }}>
        Go Home
      </Link>
      <h1>INPUTS</h1>
    </div>
  );
}
