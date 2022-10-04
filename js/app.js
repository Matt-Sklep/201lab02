"use strict";

let userName = "";

function getName() {
  let tempName = prompt("Hi there! Please tell me your name!");
  if (tempName != "") {
    userName = tempName;
    document.getElementById("welcome").innerHTML = "Welcome, " + tempName + "!";
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

  // Question 1
  let ques1 = prompt("Am I old enough to vote?");
  if (ques1.toLowerCase() === "yes" || ques1.toLowerCase() === "y") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById("q1").innerHTML =
      "Question 1: You answered '" + ques1 + "', correct!";
    score += 1;
  } else if (ques1.toLowerCase() === "no" || ques1.toLowerCase() === "n") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById("q1").innerHTML =
      "Question 1: You answered '" + ques1 + "', which is not correct :(";
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById("q1").innerHTML =
      "Question 1: You answered '" +
      ques1 +
      "', which isn't even a real answer??";
  }

  // Question 2
  let ques2 = prompt("Have I completed a college degree?");
  if (ques2.toLowerCase() === "no" || ques2.toLowerCase() === "n") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById("q2").innerHTML =
      "Question 2: You answered '" + ques2 + "', correct!";
    score += 1;
  } else if (ques2.toLowerCase() === "yes" || ques2.toLowerCase() === "y") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById("q2").innerHTML =
      "Question 2: You answered '" + ques2 + "', which is not correct :(";
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById("q2").innerHTML =
      "Question 2: You answered '" +
      ques2 +
      "', which isn't even a real answer??";
  }

  // Question 3
  let ques3 = prompt("Was I studying Underwater Basket Weaving in college?");
  if (ques3.toLowerCase() === "no" || ques3.toLowerCase() === "n") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById("q3").innerHTML =
      "Question 3: You answered '" + ques3 + "', correct!";
    score += 1;
  } else if (ques3.toLowerCase() === "yes" || ques3.toLowerCase() === "y") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById("q3").innerHTML =
      "Question 3: You answered '" + ques3 + "', which is not correct :(";
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById("q3").innerHTML =
      "Question 3: You answered '" +
      ques3 +
      "', which isn't even a real answer??";
  }

  // Question 4
  let ques4 = prompt(
    "Was my favorite job that I've worked at a place to play video games?"
  );
  if (ques4.toLowerCase() === "yes" || ques4.toLowerCase() === "y") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById("q4").innerHTML =
      "Question 4: You answered '" + ques4 + "', correct!";
    score += 1;
  } else if (ques4.toLowerCase() === "no" || ques4.toLowerCase() === "n") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById("q4").innerHTML =
      "Question 4: You answered '" + ques4 + "', which is not correct :(";
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById("q4").innerHTML =
      "Question 4: You answered '" +
      ques4 +
      "', which isn't even a real answer??";
  }

  // Question 5
  let ques5 = prompt("Am I currently learning new things with Code Fellows?");
  if (ques5.toLowerCase() === "yes" || ques5.toLowerCase() === "y") {
    //console.log("Correct!");
    alert("You are correct!");
    document.getElementById("q5").innerHTML =
      "Question 5: You answered '" + ques5 + "', correct!";
    score += 1;
  } else if (ques5.toLowerCase() === "no" || "n") {
    //console.log("Sorry, that is not correct.");
    alert("Sorry, that is not correct");
    document.getElementById("q5").innerHTML =
      "Question 5: You answered '" + ques5 + "', which is not correct :(";
  } else {
    //console.log("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.")
    alert("You did not answer with 'Yes' or 'No'. Oh well, maybe next time.");
    document.getElementById("q5").innerHTML =
      "Question 5: You answered '" +
      ques5 +
      "', which isn't even a real answer??";
  }

  alert("Thanks for playing, " + userName + "! You got " + score + "/5!");
  document.getElementById("score").innerHTML =
    "Alright, you got " + score + "/5! Thanks for playing " + userName + "!";
}
