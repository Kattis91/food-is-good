let question = document.getElementsByClassName('question');

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('mouseover', changeBackground);
    question[i].addEventListener('mouseleave', changeBack);

    function changeBackground() {
        question[i].style.backgroundColor = "#D6B6FF";
    }

    function changeBack() {
        question[i].style.backgroundColor = "lightgray";
    }
} 