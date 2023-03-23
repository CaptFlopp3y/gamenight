const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  setTime();
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which file starts with the code <!DOCTYPE html>',
    answers: [
      { text: 'index.html', correct: true },
      { text: 'script.js', correct: false },
      { text: 'style.css', correct: false },
      { text: 'index.HTML', correct: false }
    ]
  },
  {
    question: '<--! comment goes here --> This type of comment style is used for?',
    answers: [
      { text: 'HTML', correct: true },
      { text: 'script.js', correct: false },
      { text: 'style.css', correct: false },
      { text: 'none above', correct: false }
    ]
  },
  {
    question: '/ comment goes here / This type of comment style is used for?',
    answers: [
        { text: 'HTML', correct: false },
      { text: 'script.js', correct: false },
      { text: 'style.css', correct: true },
      { text: 'none above', correct: false }
    ]
  },
  {
    question: '/ comment goes here / This type of comment style is used for?',
    answers: [
        { text: 'HTML', correct: false },
      { text: 'script.js', correct: false },
      { text: 'style.css', correct: true },
      { text: 'none above', correct: false }
    ]
  },
]


var  timeE1 = document.getElementById("timer");
var secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval (function () {
    secondsLeft--;
    timeE1.textContent = secondsLeft;
    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
    }
  }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = " ";
  }

  var highScore = 0;

  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      const score = secondsLeft;
      if (score > highScore) {
        highScore = score;
        alert(`New high score: ${highScore}`);
      } else {
        alert(`Your score: ${score}`);
      }
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

  const highScoreElement = document.getElementById('high-score');
  
  function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    setTime();
    updateHighScore();
  }
  
  function updateHighScore() {
    highScoreElement.textContent = highScore;
  }
  
  
  
  
  
  
  


