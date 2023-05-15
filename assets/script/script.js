// My Code
var startPG = document.querySelector(".qAndA");
var startQuizBtn = document.createElement("button");
var startMSG = document.getElementById("lineONE");

var questions = {
    qONE: {
        quesT: "what is the meaning of Lipsum?",
        A: "1. loerm",
        B: "2. Ipsum",
        C: "3. I dont know",
        D: "all of the above",
        answerIndex: 1,
    }
}
console.log(typeof(questions.qONE));
// make it a subrouitine to reset the test

startMSG.textContent = "Click the button to start a new quiz!";
startQuizBtn.className = "btn";
startQuizBtn.textContent = "START THE QUIZ!";
startPG.appendChild(startQuizBtn);

function quizRUN(event) {
    // set timer

    // clear the button

    // for loop to loop around the list questions in the array
}


// 
startQuizBtn.addEventListener("click",quizRUN());