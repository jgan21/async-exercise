"use strict";

const BASE_URL = "http://numbersapi.com"

/** Get trivia from API on a number */

async function showNumberTrivia(){

  const favNum = 21;

  const response = await fetch(`${BASE_URL}/${favNum}`, {
    headers: {
      "Content-Type": "application/json"
      },
    });

    const data = await response.json();

  console.log(data);
}

