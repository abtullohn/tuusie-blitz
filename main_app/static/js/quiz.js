console.log('quiz.js loaded')
const startButton = document.querySelector('#start-btn');
console.log(startButton)
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
// const backButton = document.getElementById('back-btn')
// console.log(nextButton)
const result = document.getElementById('results')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const endGame = document.getElementById('ending')



let correctAnswer
let wrongAnswer
let shuffledQuestions 
let currentQuestionIndex

//  endGame.classList.toggle('hide')
startButton.addEventListener('click', startGame)
// console.log(startButton)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    correctAnswer = 0
    wrongAnswer = 0
    startButton.classList.add('hidden')
    console.log('')
    // answerButtons.classList.add('hide')
    questionContainerElement.classList.remove('hidden')
    
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    setNextQuestion()
    
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
  
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
          button.dataset.correct = answers.correct
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
    questionElement.innerText = ('GAMEOVER!')

    //trying to make an if statement to check the array of questions
    

}
}

function selectAnswer(e) {
  const selectedButton = e.target
  console.log(selectedButton)
  const correct = selectedButton.dataset.correct
  
//   result.innerText = (wrongAnswer)
  Array.from(answerButtonsElement.children).map(button => {
    
    console.log(button.dataset)
    
   })
   if(correct){
    setStatusClass(selectedButton, selectedButton.dataset.correct)
   }else{
    wrongAnswer -=1
    selectedButton.classList.add('wrong')
   }
   result.innerText = (correctAnswer)
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
   
   
  }
}
function setStatusClass(element, correct) {
//   clearStatusClass(element)
  if (correct == 'true') {
    // console.log(typeof correct)
    correctAnswer += 1
    // console.log(correctAnswer)
    element.classList.add('correct')
    
    

   
    
  } else {
    wrongAnswer -= 1
    element.classList.add('wrong')
    
   
  }
  }

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
  
}
// function endGame(){
//     if (shuffledQuestions.length == currentQuestionIndex + 1)
//     {
//         questionElement.innerText = 'End Game'
//     }
// }


let questions = [
    {
        question: 'Which position does Tom Brady plays?',
        answers: [
            {text: 'Running Back', correct: false},
            {text: 'Quarter Back', correct: true},
            {text: 'Saftey', correct:false},
            {text: 'Offensive Linemen', correct: false}
        ]
    },
    {
        question: 'Which team does Saquon Barkley plays for?',
        answers: [
            {text: 'Ravens', correct: false},
            {text: 'Cowboys', correct: false},
            {text: 'Buccs', correct:false},
            {text: 'Giants', correct: true}
        ]
    },
    {
        question: 'What position does Justin Tucker plays?',
        answers: [
            {text: 'WaterBoy', correct: false},
            {text: 'Kicker', correct: true},
            {text: 'Punter', correct:false},
            {text: 'TightEnd', correct: false}
        ]
    },
    {
        question: 'Which city does the Cowboys play for?',
        answers: [
            {text: 'Philadelphia', correct: false},
            {text: 'Dallas', correct: true},
            {text: 'Austin', correct:false},
            {text: 'Vegas', correct: false}
        ]
    },
    {
        question: 'Which team originally drafted Eli Mannning?',
        answers: [
            {text: 'Giants', correct: false},
            {text: 'Saints', correct: false},
            {text: 'Chargers', correct: true},
            {text: 'Eagles', correct: false}
        ]
    },
   
   
];