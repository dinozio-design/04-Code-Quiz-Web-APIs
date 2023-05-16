// My Code
var interactivePG = document.querySelector(".qAndA");
var startQuizBtn = document.createElement("button");
var lineOne = document.getElementById("lineONE");
var lineTwo = document.getElementById("lineTWO");
var lineThree = document.getElementById("lineTHREE");
var lineFour = document.getElementById("lineFOUR");
var lineFive = document.getElementById("lineFIVE");
var nextQuestionBtn = document.createElement("button");

const questions = {
    q1: {
        quesT: "what is the meaning of Lipsum?",
        A: "1. loerm",
        B: "2. Ipsum",
        C: "3. I dont know",
        D: "4. all of the above",
        answerIndex: 1,
    },
    q2: {
        quesT: "Do you know the meaning of Lipsum?",
        A: "1. loerm",
        B: "2. Ipsum",
        C: "3. I dont know",
        D: "all of the above",
        answerIndex: 2,
    }
}
var index = 0;
var tryQ = [];
var questNum = Object.keys(questions).length;
// make it a subrouitine to reset the test
lineOne.textContent = "Click the button to start a new quiz!";
startQuizBtn.className = "btn newQuiz";
startQuizBtn.style.display = "block";
startQuizBtn.textContent = "START THE QUIZ!";
interactivePG.appendChild(startQuizBtn);
nextQuestionBtn.className = "btn nextBtn";
nextQuestionBtn.style.display = "none";
nextQuestionBtn.style.alignItems = "end";
nextQuestionBtn.textContent = "NEXT >";
interactivePG.appendChild(nextQuestionBtn);

function renderDisplay(){
    lineOne.textContent = tryQ.quesT;
    lineTwo.textContent = tryQ.A;
    lineThree.textContent = tryQ.B;
    lineFour.textContent = tryQ.C;
    lineFive.textContent = tryQ.D;
    return;
}
// validate answer
function checkAnswer (){
    console.log(index);
    if (index < questNum-1) {
        index++;
        quizRUN();
    } else {
        // go to initials page
        console.log("you'r done", this);
    }
};

var quizRUN = function () {
    
    // set timer
    
    // clear the button
    startQuizBtn.style.display = "none";
    nextQuestionBtn.style.display = "block";
    tryQ= Object.values(questions)[index];
    console.log(tryQ);
    renderDisplay();

    // next question
}
startQuizBtn.addEventListener("click",quizRUN);
nextQuestionBtn.addEventListener("click",checkAnswer);