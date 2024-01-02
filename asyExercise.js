"use strict";

const BASE_URL = "http://numbersapi.com"

/*****************************************************************************
 * Get trivia from Numbers API on a number
 *  Logs the trivia text from API response.
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
 *  Logs the trivia text from API response.
 **/
async function showNumberTriviaQuery(favNum){

  const response = await fetch(`${BASE_URL}/${favNum}?json`)

    const data = await response.json();

    console.log(data.text);
}

/*****************************************************************************
 * Makes 4 separate requests for trivia about 4 different numbers from
 *  Numbers API.
 *  Logs the trivia text from API response for the first number with a fulfilled
 *  promise.
 **/
async function showNumberRace(nums){

  const allRespPromises = nums.map(num => fetch(`${BASE_URL}/${num}?json`));

  const answerPromise = await Promise.race(allRespPromises);

  const winningData = await answerPromise.json();

  console.log(winningData.text);
}

/*****************************************************************************
 * Makes 4 separate requests for trivia about 4 different numbers from
 *  Numbers API.
 *  Logs an array of responses for all four numbers once promises
 *  are fulfilled.
 **/
async function showNumberAll(nums){
  
  const allRespPromises = nums.map(num => fetch(`${BASE_URL}/${num}?json`));

  const data = await Promise.allSettled(allRespPromises);

  console.log(data[0]); //

  const jsonFirst = await data[0].value.json();
  // const jsonAll = data.map(d => d.json());
  
  console.log(jsonFirst);
  //data.map(d => { json = d.json
    //if d.status is 200, then d.text, push to success
    //else, d.value.statusText("Not Found"), push to failures
  //})

}

//["the number 2 is ...", "the num 12 is...", "the num 4 is..."]
//["Not Found"]

showNumberAll(["WRONG", 2, 12, 4])