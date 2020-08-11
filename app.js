window.onload = function () {
    show(0);
}
var questions = [
    {
        question: "What is the full form of RAM?",
        answer: "Random Acess Memory",
        options: [
            "Random Acess Memory",
            "Randomly Acessed Memory",
            "Run Alter Memory",
            "None of above"
        ]
    },
    {
        question: "What is the full form of ROM?",
        answer: "Read Only Memory",
        options: [
            "Read Occupied Memory",
            "Randomly occured Memory",
            "Read Only Memory",
            "None of above"
        ]
    },
    {
        question: "What is the full form of CPU",
        answer: "Central Processing Unit",
        options: [
            "None of these",
            "Central Progress Unit",
            "Read Only Memory",
            "Central Processing Unit"
        ]
    }
]

function startQuiz() {
    location.href = "index1.html";
}

var question_count = 0;
function nextbtn() {
    getValue(question_count)
    question_count++;
    if (question_count <= 2) {
        show(question_count);
        removeActive()
    }
    else if (question_count > 2) {
        location.href = "index2.html";
        printValue()
    }
}
function show(count) {
    var questions1 = document.getElementById("ques");
    questions1.innerHTML = questions[count].question;
    var opt1 = document.getElementById("option1");
    var opt2 = document.getElementById("option2");
    var opt3 = document.getElementById("option3");
    var opt4 = document.getElementById("option4");
    opt1.innerHTML = questions[count].options[0];
    opt2.innerHTML = questions[count].options[1];
    opt3.innerHTML = questions[count].options[2];
    opt4.innerHTML = questions[count].options[3];
}

function activeOption(e) {
    removeActive()
    e.classList.add("active")
}
function removeActive() {
    var remove = document.getElementsByClassName("active");
    for (var i = 0; i < remove.length; i++) {
        remove[i].classList.remove("active")
    }
}
var score = 0;
function getValue(e) {
    var value = document.getElementsByClassName("active");
    if (value[0].innerHTML == questions[e].answer) {
        score += 10;
        console.log(score);
    }
}
function printValue() {
    var score1 = document.getElementById("points");
    score1.innerHTML = score;
}
