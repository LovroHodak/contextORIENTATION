import React, { useState } from "react";

export default function Function2() {
    const [palindrome, setPalindrome] = useState('anavolimilovana')
    const [notpalindrome, setNotpalindrome] = useState('lovro')

  const isPalindrome = () => {
      if (palindrome.split('').reverse().join('') === palindrome) {
          setPalindrome('IT IS :)')
      }
      else {
        setPalindrome('IT IS NOT :(')
      }
    }

  const isNotPalindrome = () => {
    if (notpalindrome.split('').reverse().join('') === notpalindrome) {
        setNotpalindrome('IT IS :)')
    }
    else {
      setNotpalindrome('IT IS NOT :(')
    }
  }

  const reset = () => {
    setPalindrome('anavolimilovana')
    setNotpalindrome('lovro')
  }

  return (
    <div style={{ border: "2px solid green", padding: 5 }}>
      <h3>.split('').reverse().join('')</h3>
      <p>2. Write a JavaScript function that checks whether a passed string is palindrome or not?.</p>
      <h1>{palindrome}</h1>
      <button onClick={isPalindrome}>REVERSE</button>
      <h1>{notpalindrome}</h1>
      <button onClick={isNotPalindrome}>REVERSE</button>
      <br></br>
      <button onClick={reset} style={{marginTop: 10, color: 'red'}}>RESET</button>
    </div>
  );
}
