"use strict";

const BASE_URL = "http://numbersapi.com"

/*****************************************************************************
 * Get trivia from Numbers API on a number
 *  Logs the JSON response from API.
 **/
async function showNumberTrivia(favNum){

  const response = await fetch(`${BASE_URL}/${favNum}`, {
    headers: {
      "Content-Type": "application/json"
      },
    });

    const data = await response.json();

    console.log(data.text);
}

/*****************************************************************************
 * Get trivia from Numbers API on a number (via query param)
 *  Logs the JSON response from API.
 **/
async function showNumberTriviaQuery(favNum){

  const response = await fetch(`${BASE_URL}/${favNum}?json`)

    const data = await response.json();

    console.log(data.text);
}

/*****************************************************************************
 * Makes 4 separate requests for trivia about 4 different numbers from
 *  Numbers API.
 *  Logs the JSON response from API.
 **/
async function showNumberRace(nums){

  const allRespPromises = nums.map(num => fetch(`${BASE_URL}/${num}?json`));

  const answerPromise = await Promise.race(allRespPromises);

  const winningData = await answerPromise.json();

  console.log(winningData.text);
}