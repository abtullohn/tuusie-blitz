console.log('quiz.js loaded')
const startButton = document.querySelector('#start-btn');
console.log(startButton)
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
// console.log(nextButton)
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const endGame = document.getElementById('ending')




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
    startButton.classList.add('hide')
    console.log('')
    // answerButtons.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    
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
  setStatusClass(e.target,correct)
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
// function endGame(){
//     if (shuffledQuestions.length == currentQuestionIndex + 1)
//     {
//         questionElement.innerText = 'End Game'
//     }
// }


let questions = [
    {
        question: 'which state is known for potatoes?',
        answers: [
            {text: 'Idaho', correct: true},
            {text: 'Alabama', correct: false},
            {text: 'New Jersey', correct:false},
            {text: 'Oregon', correct: false}
        ]
    },
    {
        question: 'when was lays company found?',
        answers: [
            {text: 'Sept 1962', correct: false},
            {text: 'Sept 1971', correct: false},
            {text: 'Aug 1961', correct:false},
            {text: 'Sept 1961', correct: true}
        ]
    },
    {
        question: 'what food contains potatoes in it?',
        answers: [
            {text: 'burgers', correct: false},
            {text: 'tator tots', correct: true},
            {text: 'lasagna', correct:false},
            {text: 'cereal', correct: false}
        ]
    },
    {
        question: 'what is a potato consist of?',
        answers: [
            {text: '20% water 80% solid', correct: false},
            {text: '80% water 20% solid', correct: true},
            {text: 'its just a potato', correct:false},
            {text: '100% solid', correct: false}
        ]
    },
    {
        question: 'how much potato does an average american consume per year?',
        answers: [
            {text: '2 pounds', correct: false},
            {text: '110 pounds', correct: false},
            {text: '111 pounds', correct: true},
            {text: '9 pounds', correct: false}
        ]
    },
   
   
];