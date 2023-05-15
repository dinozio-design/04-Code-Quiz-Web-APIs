// My Code
var startPG = document.querySelector(".qAndA");
var startQuizBtn = document.createElement("button");
var startMSG = document.getElementById("lineONE");

var questions = {
    q1: {
        quesT: "what is the meaning of Lipsum?",
        A: "1. loerm",
        B: "2. Ipsum",
        C: "3. I dont know",
        D: "all of the above",
        answerIndex: 1,
    },
    q2: {
        quesT: "what is the meaning of Lipsum?",
        A: "1. loerm",
        B: "2. Ipsum",
        C: "3. I dont know",
        D: "all of the above",
        answerIndex: 2,
    }
}

// make it a subrouitine to reset the test

startMSG.textContent = "Click the button to start a new quiz!";
startQuizBtn.className = "btn";
startQuizBtn.style.display = "block";
startQuizBtn.textContent = "START THE QUIZ!";
startPG.appendChild(startQuizBtn);

var quizRUN = function () {
    // set timer

    // clear the button
    startQuizBtn.style.display = "none";

    // for loop to loop around the list questions in the array
    for (question in questions){
        console.log(typeof (question));
    }
}


// 
startQuizBtn.addEventListener("click",quizRUN);