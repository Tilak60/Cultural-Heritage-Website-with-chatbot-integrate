const questions = [
  { question: "What is the capital of India?", correctAnswer: "A", options: { A: "New Delhi", B: "Mumbai", C: "Kolkata", D: "Chennai" } },
  { question: "Which is the largest desert in the world?", correctAnswer: "B", options: { A: "Sahara", B: "Antarctic", C: "Karakum", D: "Kalahari" } },
  { question: "What is the oldest civilization in the world?", correctAnswer: "C", options: { A: "Mesopotamian", B: "Mayan", C: "Indus Valley", D: "Egyptian" } },
  { question: "Who wrote 'Hamlet'?", correctAnswer: "A", options: { A: "Shakespeare", B: "Charles Dickens", C: "Hemingway", D: "J.K. Rowling" } },
  { question: "What is the speed of light?", correctAnswer: "B", options: { A: "200,000 km/s", B: "299,792 km/s", C: "150,000 km/s", D: "500,000 km/s" } },
  { question: "Which gas do plants use for photosynthesis?", correctAnswer: "C", options: { A: "Oxygen", B: "Nitrogen", C: "Carbon Dioxide", D: "Hydrogen" } },
  { question: "Which planet is known as the Red Planet?", correctAnswer: "D", options: { A: "Venus", B: "Jupiter", C: "Saturn", D: "Mars" } },
  { question: "What is the powerhouse of the cell?", correctAnswer: "A", options: { A: "Mitochondria", B: "Nucleus", C: "Ribosome", D: "Golgi Apparatus" } },
  { question: "Which ocean is the deepest?", correctAnswer: "B", options: { A: "Atlantic", B: "Pacific", C: "Indian", D: "Arctic" } },
  { question: "Which animal is the king of the jungle?", correctAnswer: "C", options: { A: "Tiger", B: "Elephant", C: "Lion", D: "Giraffe" } }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
      const optionKey = Object.keys(questionData.options)[index]; 
      button.textContent = questionData.options[optionKey]; 
      button.setAttribute("data-answer", optionKey);
    });
  } else {
    showResult();
  }
}

function checkAnswer(event) {
  const selectedAnswer = event.target.getAttribute("data-answer");
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  
  if (score === questions.length) {
    quizContainer.innerHTML = `
      <h1>Congratulations! 🎉</h1>
      <p>You answered all ${questions.length} questions correctly!</p>
      <p>You won a FREE TICKET! 🎟️</p>
      <button onclick="restartQuiz()">Play Again</button>
    `;
  } else {
    quizContainer.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>You scored ${score} out of ${questions.length}.</p>
      <button onclick="restartQuiz()">Try Again</button>
    `;
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz-container").innerHTML = `
    <h1>Quiz Challenge</h1>
    <div id="question-box">
        <h2 id="question"></h2>
        <div id="options">
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
        </div>
    </div>
    <p id="score-text"></p>
  `;
  addEventListeners();
  displayQuestion();
}

function addEventListeners() {
  document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", checkAnswer);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
  addEventListeners();
});
