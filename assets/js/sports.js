// elements for Sports Trivia
const startSportsButton = document.getElementById('1-sports')
const nextSportsButton = document.getElementById('next-button')
const sportsQuestionContainerElement = document.getElementById
('answer-buttons')
const sportsQuestionElement = document.getElementById('question')
const sportsAnswerButtonsElement = document.getElementById
('answer-buttons')

let shuffledSportsQuestions, currentSportsQuestionIndex

startSportsButton.addEventListener('click', startSportsGame)
nextSportsButton.addEventListener('click', () => {
    currentSportsQuestionIndex++
    setNextSportsQuestion()
})

// functions for Sports Trivia
function startSportsGame() {
    startSportsButton.classList.add('hidden')
    shuffledSportsQuestions = sportsQuestions.sort(() => Math.random() - .5)
    currentSportsQuestionIndex = 0
    sportsQuestionContainerElement.classList.remove('hidden')
    setNextSportsQuestion()
}

function setNextSportsQuestion() {
    sportsReset()
    showSportsQuestion(shuffledSportsQuestions[currentSportsQuestionIndex])
}

function showSportsQuestion(question) {
    sportsQuestionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btns')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectSportsAnswer)
        sportsAnswerButtonsElement.appendChild(button)
    })
}

function sportsReset() {
    nextSportsButton.classList.add('hidden')
    while (sportsAnswerButtonsElement.firstChild) {
        sportsAnswerButtonsElement.removeChild(sportsAnswerButtonsElement.firstChild)
    }
}

function selectSportsAnswer(e) {
    const selectedSportsButton = e.target
    const correctSports = selectedSportsButton.dataset.correct
    setSportsStatatusClass(document.body, correct)
    Array.from(sportsAnswerButtonsElement.children).forEach(button => {
        setSportsStatatusClass(button, button.dataset.correct)
    })
    if (shuffledSportsQuestions > currentSportsQuestionIndex + 1) {
        nextSportsButton.classList.remove('hidden')
    } else {
        startSportsButton.innerText = 'Restart'
        startSportsButton.classList.remove('hidden')
    }
}

function setSportsStatatusClass(element, correct) {
    clearSportsStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearSportsStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

// questions for Sports Trivia
const sportsQuestions = [
    {
        question: 'Who has the all time leading score in the nba?',
        answers: [
            { text: 'LeBron James', correct: true},
            { text: 'Kobe Bryant', correct: false},
            { text: 'Michael Jordan', correct: false},
            { text: 'Stephen Curry', correct: false}
        ]
    },
    {
        question: 'Who holds the all-time home run leader in the MLB?',
        answers: [
            { text: 'Barry Bonds', correct: true},
            { text: 'Mike Trout', correct: false},
            { text: 'Adam Duvall', correct: false},
            { text: 'Wander Franco', correct: false}
        ]
    },
    {
        question: 'Which quarterback has won the most super bowls in the NFL?',
        answers: [
            { text: 'Tom Brady', correct: true},
            { text: 'Kirk Cousins', correct: false},
            { text: 'Aaron Rodgers', correct: false},
            { text: 'Matt Ryan', correct: false}
        ]
    },
    {
        question: 'Which mens college basketball team has won the most national championships in NCAA Divison 1?',
        answers: [
            { text: 'UCLA', correct: true},
            { text: 'Kentucky', correct: false},
            { text: 'North Carolina', correct: false},
            { text: 'Duke', correct: false}
        ]
    },
    {
        question: 'What Olympic athlete has won the most gold medals in the world?',
        answers: [
            { text: 'Michael Phelps', correct: true},
            { text: 'Allyson Felix', correct: false},
            { text: 'Carl Lewis', correct: false},
            { text: 'Jenny Thompson', correct: false}
        ]
    },
    {
        question: 'How many wins by knockout did Mike Tyson have in his professional boxing career?',
        answers: [
            { text: '44', correct: true},
            { text: '50', correct: false},
            { text: '38', correct: false},
            { text: '47', correct: false}
        ]
    },
    {
        question: ' Who has won more tennis grand slam titles, Venus Williams or Serena Williams?',
        answers: [
            { text: 'Serena Williams', correct: true},
            { text: 'Venus Williams', correct: false}
        ]
    },
    {
        question: 'What country has competed the most times in the Summer Olympics yet has not won a gold medal?',
        answers: [
            { text: 'The Philippines', correct: true},
            { text: 'America', correct: false},
            { text: 'Brazil', correct: false},
            { text: 'Australia', correct: false}
        ]
    },
    {
        question: 'What is the national sport of Canada?',
        answers: [
            { text: 'Lacrosse', correct: true},
            { text: 'Hockey', correct: false},
            { text: 'Figure Skating', correct: false},
            { text: 'Baseball', correct: false}
        ]
    },
    {
        question: 'How many times has UCLA won the mens Division 1 NCAA national championships?',
        answers: [
            { text: '11', correct: true},
            { text: '13', correct: false},
            { text: '9', correct: false},
            { text: '7', correct: false}
        ]
    }
]