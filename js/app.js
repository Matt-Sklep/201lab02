"use strict";

let userName = "";

function getName() {
  let tempName = prompt("Hi there! Please tell me your name!");
  if (tempName != "") {
    userName = tempName;
    document.getElementById("welcome").innerHTML = `Welcome, ${tempName}!`;
  } else {
    document.getElementById("welcome").innerHTML =
      "Welcome, friendly stranger!";
  }
}
window.onload = getName();

function gameStart() {
  let score = 0;

  alert(
    "Welcome to my game of seven questions! Please answer with either a 'Yes' or a 'No' for each question."
  );
let questions=["Am I old enough to vote?", "Have I completed a college degree?", "Was I studying Underwater Basket Weaving in college?", "Was my favorite job that I've worked at a place to play video games?", "Am I currently learning new things with Code Fellows?"];

let answers=[['yes', 'y'], ['no', 'n'], ['no', 'n'], ['yes', 'y'], ['yes', 'y']];

for(let i=0; i<questions.length; i++){
  let input=prompt(questions[i]);
  let correct=false;
  if(typeof answers[i] !=='string'){
    for(let answer of answers[i]){
      if(input.toLowerCase() === answer){
        alert('You are correct!');
        score++;
        correct=true;
        let qID = `q${i + 1}`;
        document.getElementById(qID).innerHTML = `Question ${i + 1}: You answered '${input}', correct!`;
        break;
      }
    }
  }
  if(correct===false){
    alert(`Sorry, that's not correct`);
    let qID = `q${i + 1}`;
        document.getElementById(qID).innerHTML = `Question ${i + 1}: You answered '${input}', not correct!`;
  }
}

  /*
  // Question 1
  let ques1 = prompt("Am I old enough to vote?");
  if (ques1.toLowerCase() === "yes" || ques1.toLowerCase() === "y") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById(
      "q1"
    ).innerHTML = `Question 1: You answered '${ques1}', correct!`;
    score += 1;
  } else if (ques1.toLowerCase() === "no" || ques1.toLowerCase() === "n") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById(
      "q1"
    ).innerHTML = `Question 1: You answered '${ques1}', which is not correct :(`;
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById(
      "q1"
    ).innerHTML = `Question 1: You answered '${ques1}', which isn't even a real answer??`;
  }

  // Question 2
  let ques2 = prompt("Have I completed a college degree?");
  if (ques2.toLowerCase() === "no" || ques2.toLowerCase() === "n") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById(
      "q2"
    ).innerHTML = `Question 2: You answered '${ques2}', correct!`;
    score += 1;
  } else if (ques2.toLowerCase() === "yes" || ques2.toLowerCase() === "y") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById(
      "q2"
    ).innerHTML = `Question 2: You answered '${ques2}', which is not correct :(`;
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById(
      "q2"
    ).innerHTML = `Question 2: You answered '${ques2}', which isn't even a real answer??`;
  }

  // Question 3
  let ques3 = prompt("Was I studying Underwater Basket Weaving in college?");
  if (ques3.toLowerCase() === "no" || ques3.toLowerCase() === "n") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById(
      "q3"
    ).innerHTML = `Question 3: You answered '${ques3}', correct!`;
    score += 1;
  } else if (ques3.toLowerCase() === "yes" || ques3.toLowerCase() === "y") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById(
      "q3"
    ).innerHTML = `Question 3: You answered '${ques3}', which is not correct :(`;
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById(
      "q3"
    ).innerHTML = `Question 3: You answered '${ques3}', which isn't even a real answer??`;
  }

  // Question 4
  let ques4 = prompt(
    "Was my favorite job that I've worked at a place to play video games?"
  );
  if (ques4.toLowerCase() === "yes" || ques4.toLowerCase() === "y") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById(
      "q4"
    ).innerHTML = `Question 4: You answered '${ques4}', correct!`;
    score += 1;
  } else if (ques4.toLowerCase() === "no" || ques4.toLowerCase() === "n") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById(
      "q4"
    ).innerHTML = `Question 4: You answered '${ques4}', which is not correct :(`;
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById(
      "q4"
    ).innerHTML = `Question 4: You answered '${ques4}', which isn't even a real answer??`;
  }

  // Question 5
  let ques5 = prompt("Am I currently learning new things with Code Fellows?");
  if (ques5.toLowerCase() === "yes" || ques5.toLowerCase() === "y") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById(
      "q5"
    ).innerHTML = `Question 5: You answered '${ques5}', correct!`;
    score += 1;
  } else if (ques5.toLowerCase() === "no" || "n") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById(
      "q5"
    ).innerHTML = `Question 5: You answered '${ques5}', which is not correct :(`;
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById(
      "q5"
    ).innerHTML = `Question 5: You answered '${ques5}', which isn't even a real answer??`;
  }*/

  alert("Okay, we're no longer answering with 'Yes' or 'No' here.");

  // Question 6
  let attempts = 4;
  let numGuess = 24;
  // Takes the User input and converts it to a number
  let ques6 = parseInt(prompt("What number am I thinking of?"));
  // If the answer is wrong and there are attempts, it gets chucked into this while loop
  while (ques6 !== numGuess && attempts > 1) {
    if (ques6 < numGuess) {
      //Guess was too small
      attempts -= 1;
      //console.log(`You are too low. You have ${attempts} attempts left.`);
      //console.log(attempts);
      alert(
        `You're too low. Think higher! You have ${attempts} attempts left.`
      );
    } else if (ques6 > numGuess) {
      // Guess was too big
      attempts -= 1;
      //console.log(`You are too high. You have ${attempts} attempts left.`);
      //console.log(attempts);
      alert(
        `You're too high. Think lower! You have ${attempts} attempts left.`
      );
    } else {
      // Guess was not a num
      attempts -= 1;
      //console.log(`This was not a number. You have ${attempts} attempts left.`);
      //console.log(attempts);
      alert(
        `That was not a number. Please enter a number. You have ${attempts} attempts left.`
      );
    }
    ques6 = parseInt(prompt("What number am I thinking of?"));
  }
  // If input is right or there are no attempts left, skips while loop and comes here.
  if (ques6 === numGuess) {
    // User gets it right
    score += 1;
    alert("Correct! That's the number I was thinking of!");
    document.getElementById(
      "q6"
    ).innerHTML = `Question 6: You answered '${ques6}', correct!`;
  } else {
    // User gets it wrong
    alert(
      `Sorry, you're out of guesses. The number I was thinking of was ${numGuess}.`
    );
    document.getElementById(
      "q6"
    ).innerHTML = `Question 6: You answered '${ques6}', which is not correct :(`;
  }

  // Question 7
  let musicAttempts = 6;
  let isFav = false;
  let favBands = [
    "Rush",
    "Electric Light Orchestra",
    "Pendulum",
    "Genesis",
    "TWRP",
    "Casiopea",
    "Styx",
    "Breaking Benjamin",
    "Starcadian",
    "Gemini Syndrome",
  ];
  //while loop keeps going until user is out of attempts or they guess the right answer
  while (musicAttempts > 0 && isFav === false) {
    let ques7 = prompt("Who is one of my favorite artists?");
    musicAttempts -= 1;
    //checks each index in the favBands array
    for (let i = 0; i < favBands.length; i++) {
      if (ques7.toLowerCase() === favBands[i].toLowerCase()) {
        alert(`That's correct! ${ques7} is one of my favorite artists!`);
        score += 1;
        //console.log(`Correct! ${ques7} is one of my fav bands`);
        document.getElementById(
          "q7"
        ).innerHTML = `Question 7: You answered '${ques7}', which is one of my favorite artists!`;
        isFav = true;
        /*breaks us out of the for loop once we get the correct answer.
        no reason to check the other indexes of the array.*/
        break;
      }
    }
    /*once for loop is finished, if input was not in array, check
    that isFav is still false and we still have attempts*/
    if (isFav === false && musicAttempts < 6) {
      alert(
        `That's not right. Remember the top 10 list... You have ${musicAttempts} attempts left.`
      );
    }
    /*when user runs out of attempts, they get this final prompt*/
    if (musicAttempts === 0) {
      alert("Uh oh! You have run out of attempts.");
      document.getElementById(
        "q7"
      ).innerHTML = `Question 7: You unfortunately did not guess one of my favorite bands.`;
    }
  }

  alert(`Thanks for playing, ${userName}! You got ${score}/7!`);
  document.getElementById(
    "score"
  ).innerHTML = `Alright, you got ${score}/7! Thanks for playing, ${userName}!`;
}
