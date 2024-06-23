const startBtn = document.getElementById("startQuiz");
const container = document.querySelector(".container");
const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("questionContainer");
const submitQuizBtn = document.getElementById("submitQuiz");
const scoreContainer = document.getElementById("scoreContainer");

let indexQuestion = 0;

startBtn.addEventListener("click", function () {
  startGame();
  getData();
});

function startGame() {
  quizContainer.classList.remove("hidden");
}
async function getData() {
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/0a3616a2-4181-4a06-856f-c42c0e3aa74b"
    );
    const data = await res.json();
    getQuestions(data);
  } catch (error) {
    console.log(error);
  }
}
function getQuestions(data) {
  data.results.forEach((item) => {
    let question = item.question;
    const questionHeader = document.createElement("h2");
    questionHeader.innerHTML = question;

    questionContainer.appendChild(questionHeader);
  });
}
