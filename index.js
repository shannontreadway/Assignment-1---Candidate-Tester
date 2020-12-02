const input = require('readline-sync');

// Ask the candidate to enter their name
let name=input.question("Enter your name. ");
console.log(`Hello, ${name}. Please answer the following questions:` + "\n");

//Setup arrays to for program
let questions = ["1) True or false: 5000 meters = 5 kilometers. ", "2) (5+3)/2 * 10 = ", "3) Given the array [8, 'Orbit', 'Trajectory', 45], what entery is at index 2? ", "4) Who was the first American in space? ", "5) What is the minimum crew size for the International Space Station (ISS)? "];
let correctAnswers = ["TRUE","40", "TRAJECTORY", "SALLY RIDE", "3"];
let candidateAnswers = [];
let areCandidateAnswersCorrect = [];
let correctArray = [];


//Use a loop to ask questions, one at a time, to the candidate, collect the answers, and check those answers for accuracy 
for (i=0; i<questions.length; i++){
  let answer = input.question(questions[i]);
  candidateAnswers.push(answer);
  // Check those answers for accuracy (case insensitive equality check)
  if (candidateAnswers[i].toUpperCase() === correctAnswers[i]){
    areCandidateAnswersCorrect.push("correct");
  } else {
    areCandidateAnswersCorrect.push("incorrect");
  }
  //Inform candidate if answer is correct
  if (areCandidateAnswersCorrect[i] === "correct"){
    console.log("CORRECT" + "\n");
  } else {
    console.log(`INCORRECT. The correct answer is ${correctAnswers[i]}.` + "\n");
  }
}

// Calculate the candidate's overall percentage
  //How many / which numbers are correct? 
for (i=0; i<areCandidateAnswersCorrect.length; i++) {
  if (areCandidateAnswersCorrect[i] === "correct") {
    correctArray.push(i);
  }
}
  //Percentage calculations.
let percentage = 100 * correctArray.length / correctAnswers.length;

console.log(`You scored ${percentage}%. (${correctArray.length} out of ${correctAnswers.length} correct)`);


// Determine if the candidate did well enough to enter the program (need >= 80% to pass) and Display the results.
function passFail(percentage) {
  if (percentage >= 80) {
    return("Congratulations!  You passed!");
  } else {
    return ("Sorry, you failed. 80% or better is required. Better luck next time.");
  }
}
console.log(passFail(percentage));

console.log("\n");

// Make pretty report for company
console.log("-----------------------------------");
console.log("     REPORT FOR CANDIDATE FILE");
console.log("-----------------------------------", "\n");

console.log(`CANDIDATE NAME: ${name}` + "\n");

//Display question, candidate answer, correct answer, and if answer was correct or incorrect
for (i=0; i<questions.length; i++){
  console.log(questions[i]);
  console.log("CANDIDATE ANSWER:" + candidateAnswers[i]);
  console.log(`CORRECT ANSWER: ${correctAnswers[i]}`);
  console.log(areCandidateAnswersCorrect[i].toUpperCase(), "\n");
}

//Display percentage and if candidate passed or failed.
console.log(`SCORE: ${percentage}%. (${correctArray.length} out of ${correctAnswers.length} correct)`);

function passFailReport(percentage) {
  if (percentage >= 80) {
    return("PASS");
  } else {
    return ("FAIL. 80% or better is required.");
  }
}
console.log(`STATUS: ${passFailReport(percentage)}`);

