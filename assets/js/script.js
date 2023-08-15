//to validate the username that should consist of at least 3 characters
function handleSubmit(event) {
    event.preventDefault();
    let username = form.elements['username'].value;
    
    if(username.length < 3) {
        alert("Please note that the username must consist of at least three characters!");
        document.getElementById("username").value = "";
    } else {
        alert(`Hello ${form.elements['username'].value}! Welcome to the quiz!`);

        let formCase = document.getElementById("form");
        formCase.style.display = "none";

        quiz.style.display = "block";

        let score = document.getElementById("score-area");
        score.style.display = "block";
    }
}

let form = document.getElementById("username-form");
form.addEventListener("submit", handleSubmit);

/*
 Create an array of objects where each object include
 a question, three answer alternatives and the correct answer
*/
const content = [
    
    { 
        question: "What is the name of the traditional Spanish saffron-spiced rice dish with chicken and seafood cooked in a large pan?",
        a: "Risotto",
        b: "Paella",
        c: "Quesadilla",
        correct: "b",
    },
    {
        question: "Chili sin carne and chili con carne are very similar. Which ingredient is removed from chili sin carne?",
        a: "Meat",
        b: "Tomato",
        c: "Beans",
        correct: "a",
    },
    {
        question: "Have you heard of famous Swedish meatballs? Which country do they actually come from?",
        a: "Greece",
        b: "Turkey",
        c: "Iran",
        correct: "b",
    },
    {
        question: "What date is the international pizza day celebrated?",
        a: "January the 1st",
        b: "August the 8th",
        c: "November the 23th",
        correct: "a",
    },
    {
        question: "Have you heard of 'blini'? What kind of dish is that?",
        a: "Russian pancakes",
        b: "Polish pierogies",
        c: "Hungarian soup",
        correct: "a",
    },
    {
        question: "You are invited to a party. You receive aperitif. What is that?",
        a: "Starter",
        b: "Dessert",
        c: "Drink",
        correct: "c",
    },
];


//Create variables to access elements from a HTML document.
const quiz = document.getElementById("quiz");
const answerElements = document.getElementsByClassName("answer");
const question = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const submit = document.getElementById("submit");

//To keep track of the current quiz question.
let currentQuiz = 0;

startQuiz();

function startQuiz() {
    deselectAnswers();
    
    const currentContent = content[currentQuiz];
    question.innerText = currentContent.question;
    aText.innerText = currentContent.a;
    bText.innerText = currentContent.b;
    cText.innerText = currentContent.c;
}

//to clear the previous selection before displaying a new quiz question
function deselectAnswers() {
    for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].checked = false;
    }
}

//to return the selected answer
function getSelected() {
    let answer;
    
    for (let i = 0; i < answerElements.length; i++) {
        if(answerElements[i].checked) {
            answer = answerElements[i].id;
        }
    }

    return answer;
}

//to increase the score when the right answer is selected
function increaseScore() {

    let oldScore = document.getElementById('score').innerText;
    document.getElementById('score').innerText = ++oldScore;
}

//to increase amount of incorrect answers when the wrong answer is selected
function increaseWrongAnswer() {
    let oldScore = document.getElementById('incorrect').innerText;
    document.getElementById('incorrect').innerText = ++oldScore;
}

//to start function results() when the submit button is clicked 
submit.addEventListener("click", results);

function results() {
    
    const answer = getSelected();
    
     if(answer) {
        if (answer === content[currentQuiz].correct) {
           increaseScore();
           
        } else {
            increaseWrongAnswer();
        }
        
        currentQuiz++;
        
        if (currentQuiz < content.length) {
            
            startQuiz();
            
        } else {
            
            quiz.innerHTML = `
            <h2>Would you like to retake the quiz?</h2>
            <button onclick="history.go(0)">Yes</button>
            <button onclick="replace();">No, thanks!</button>`;
        }
      }
    }

    function replace() {
        document.write('<h1>Thank you for choosing our site!</h1>');
        document.write('<p>Have a nice week and come back for our other theme quizzes</p>')
    }