import React, { useState} from "react";

export default function Function1() {
  const [number, setNumber] = useState(12345);

  const reverseNumber = () => {
      setNumber(number.toString().split('').reverse().join(''))
  }

  return (
    <div style={{ border: "2px solid green", padding: 5 }}>
      <h3>.toString().split('').reverse().join('')</h3>
      <p>1. Write a JavaScript function that reverse a number.</p>
      <h1>{number}</h1>
      <button onClick={reverseNumber}>REVERSE</button>
    </div>
  );
}
