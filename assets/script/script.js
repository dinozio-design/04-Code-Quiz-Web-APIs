// My Code
var interactivePG = document.querySelector(".qAndA");
var startQuizBtn = document.createElement("button");
var lineOne = document.getElementById("lineONE");
var lineTwo = document.getElementById("lineTWO");
var lineThree = document.getElementById("lineTHREE");
var lineFour = document.getElementById("lineFOUR");
var lineFive = document.getElementById("lineFIVE");
var chosenOption = document.querySelector(".options");
var nextQuestionBtn = document.createElement("button");
console.log(chosenOption);

const questions = {
    q1: {
        quesT: "what is the meaning of Lipsum? (answer is A)",
        A: "1. loerm",
        B: "2. Ipsum",
        C: "3. I dont know",
        D: "4. all of the above",
        answerIndex: 1
    },
    q2: {
        quesT: "Do you know the meaning of Lipsum? (answer is B)",
        A: "1. color",
        B: "2. Ip address",
        C: "3. knowledge",
        D: "4. any of the two",
        answerIndex: 2
    },
    q3: {
        quesT: "I am running out of of Lipsum? (answer is C)",
        A: "1. lsn't",
        B: "2. maybe",
        C: "3. perhaps",
        D: "4. all of the above",
        answerIndex: 3
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
    lineOne.style.display = "block";
    lineTwo.textContent = tryQ.A;
    lineTwo.style.display = "block";
    lineThree.textContent = tryQ.B;
    lineThree.style.display = "block";
    lineFour.textContent = tryQ.C;
    lineFour.style.display = "block";
    lineFive.textContent = tryQ.D;
    lineFive.style.display = "block";
    return;
};
// validate answer
function checkAnswer (){

    if (index < questNum-1) {
        index++;
        quizRUN();
    } else {
        // go to initials page
        console.log("you'r done", this);
    }
};
function choices (event){
    var element = event.target;
        // event.stopPropagation();
        event.currentTarget.setAttribute(
            "style",
            "background-color: #601A4A"
        );
        var state = element.getAttribute("data-state");
        console.log(state);
}

var quizRUN = function () {
    
    // set timer
    
    // clear the button
    startQuizBtn.style.display = "none";
    nextQuestionBtn.style.display = "block";
    tryQ= Object.values(questions)[index];
    // console.log(tryQ);
    renderDisplay();
    chosenOption.addEventListener("click",choices);

    // next question
}
startQuizBtn.addEventListener("click",quizRUN);
nextQuestionBtn.addEventListener("click",checkAnswer);