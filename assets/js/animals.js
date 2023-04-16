// elements for Animal Trivia
const animalStartButton = document.getElementById('1-animals')
const animalNextButton = document.getElementById('next-button')
const animalQuestionContainerElement = document.getElementById('answer-buttons')
const animalQuestionElement = document.getElementById('question')
const animalAnswerButtonsElement = document.getElementById('answer-buttons')
const animalLeaderboardButton = document.getElementById('leaderboard-button')
const animalHomeButton = document.getElementById('home-button')

let shuffledAnimalQuestions, currentAnimalQuestionIndex

animalStartButton.addEventListener('click', startAnimalGame)
animalNextButton.addEventListener('click', () => {
    currentAnimalQuestionIndex++
    setNextAnimalQuestion()
})

// functions for Animal Trivia
function startAnimalGame() {
    animalStartButton.classList.add('hidden')
    shuffledAnimalQuestions = animalQuestions.sort(() => Math.random() - .5)
    currentAnimalQuestionIndex = 1
    animalQuestionContainerElement.classList.remove('hidden')
    setNextAnimalQuestion()
}

function setNextAnimalQuestion() {
    animalReset()
    showAnimalQuestion(shuffledAnimalQuestions[currentAnimalQuestionIndex])
}

function showAnimalQuestion(question) {
    animalQuestionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btns')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnimalAnswer)
        animalAnswerButtonsElement.appendChild(button)
    })
}

function animalReset() {
    animalNextButton.classList.add('hidden')
    while (animalAnswerButtonsElement.firstChild) {
        animalAnswerButtonsElement.removeChild(animalAnswerButtonsElement.firstChild)
    }
}

function selectAnimalAnswer(e) {
    const selectedAnimalButton = e.target
    const correctAnimal = selectedAnimalButton.dataset.correct
    setAnimalStatatusClass(document.body, correctAnimal)
    Array.from(animalAnswerButtonsElement.children).forEach(button => {
        setAnimalStatatusClass(button, button.dataset.correct)
    })
    if (shuffledAnimalQuestions.length > currentAnimalQuestionIndex + 1) {
        animalNextButton.classList.remove('hidden')
    } else {
        console.log('hello')
        animalLeaderboardButton.classList.remove('hidden')
        animalHomeButton.classList.remove('hidden')
    }
}

function setAnimalStatatusClass(element, correct) {
    clearAnimalStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearAnimalStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// questions for Animal Trivia
const animalQuestions = [
    {
        question: 'Which has the strongest bite force?',
        answers: [
            { text: 'Saltwater Crocodile', correct: true},
            { text: 'Hippopotamus', correct: false},
            { text: 'Lion', correct: false},
            { text: 'American Alligator', correct: false}
        ]
    },
    {
        question: 'How fast can a mantis shrimp swing its club?',
        answers: [
            { text: '50 mph', correct: true},
            { text: '70 mph', correct: false},
            { text: '90 mph', correct: false},
            { text: '35 mph', correct: false}
        ]
    },
    {
        question: 'On average, how many people are killed by lions each year?',
        answers: [
            { text: 'Less than 20', correct: true},
            { text: 'About 20', correct: false},
            { text: 'More than 20', correct: false},
            { text: 'About 50', correct: false}
        ]
    },
    {
        question: 'Which has the thickest fur of any mammal?',
        answers: [
            { text: 'Sea Otter', correct: true},
            { text: 'Lion', correct: false},
            { text: 'Kangaroo', correct: false},
            { text: 'Tiger', correct: false}
        ]
    },
    {
        question: 'Which is the smallest mammal in the world when fully grown?',
        answers: [
            { text: 'Bumblebee Bat', correct: true},
            { text: 'Elephant Shrew', correct: false},
            { text: 'Deer Mouse', correct: false},
            { text: 'Sugar Glider', correct: false}
        ]
    },
    {
        question: 'Which is the largest mammal in the world?',
        answers: [
            { text: 'Blue Whale', correct: true},
            { text: 'Elephant', correct: false},
            { text: 'Sperm Whale', correct: false},
            { text: 'Hippopotamus', correct: false}
        ]
    },
    {
        question: 'No mammals are capable of true flight. True or False?',
        answers: [
            { text: 'False', correct: true},
            { text: 'True', correct: false}
        ]
    },
    {
        question: 'Which has the highest blood pressure of any animal?',
        answers: [
            { text: 'Giraffe', correct: true},
            { text: 'River Otter', correct: false},
            { text: 'Grey Wolf', correct: false},
            { text: 'Dolphin', correct: false}
        ]
    },
    {
        question: 'Male seahorses give birth. True or False?',
        answers: [
            { text: 'True', correct: true},
            { text: 'False', correct: false}
        ]
    },
    {
        question: 'What is the deadliest creature in the world?',
        answers: [
            { text: 'Mosquito', correct: true},
            { text: 'Hippopotamus', correct: false},
            { text: 'Great White Shark', correct: false},
            { text: 'Kangaroo', correct: false}
        ]
    }
]
