// elements for TvShows Trivia
const startTvShowsButton = document.getElementById('1-tv-shows')
const nextTvShowsButton = document.getElementById('next-button')
const tvShowsQuestionContainerElement = document.getElementById
('answer-buttons')
const tvShowsQuestionElement = document.getElementById('question')
const tvShowsAnswerButtonsElement = document.getElementById
('answer-buttons')

let shuffledTvShowsQuestions, currentTvShowsQuestionIndex

startTvShowsButton.addEventListener('click', startTvShowsGame)
nextTvShowsButton.addEventListener('click', () => {
    currentTvShowsQuestionIndex++
    setNextTvShowsQuestion()
})

// functions for TvShows Trivia
function startTvShowsGame() {
    startTvShowsButton.classList.add('hidden')
    shuffledTvShowsQuestions = tvShowsQuestions.sort(() => Math.random() - .5)
    currentTvShowsQuestionIndex = 0
    tvShowsQuestionContainerElement.classList.remove('hidden')
    setNextTvShowsQuestion()
}

function setNextTvShowsQuestion() {
    tvShowsReset()
    showTvShowsQuestion(shuffledTvShowsQuestions[currentTvShowsQuestionIndex])
}

function showTvShowsQuestion(question) {
    tvShowsQuestionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btns')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectTvShowsAnswer)
        tvShowsAnswerButtonsElement.appendChild(button)
    })
}

function tvShowsReset() {
    nextTvShowsButton.classList.add('hidden')
    while (tvShowsAnswerButtonsElement.firstChild) {
        tvShowsAnswerButtonsElement.removeChild(tvShowsAnswerButtonsElement.firstChild)
    }
}

function selectTvShowsAnswer(e) {
    const selectedTvShowsButton = e.target
    const correctTvShows = selectedTvShowsButton.dataset.correct
    setTvShowsStatatusClass(document.body, correct)
    Array.from(tvShowsAnswerButtonsElement.children).forEach(button => {
        setTvShowsStatatusClass(button, button.dataset.correct)
    })
    if (shuffledTvShowsQuestions > currentTvShowsQuestionIndex + 1) {
        nextTvShowsButton.classList.remove('hidden')
    } else {
        startTvShowsButton.innerText = 'Restart'
        startTvShowsButton.classList.remove('hidden')
    }
}

function setTvShowsStatatusClass(element, correct) {
    clearTvShowsStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearTvShowsStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

// questions for TvShows Trivia
const tvShowsQuestions = [
    {
        question: 'What is the name of the main character in the show Psych?',
        answers: [
            { text: 'Shawn', correct: true},
            { text: 'Gus', correct: false},
            { text: 'Henry', correct: false},
            { text: 'Juliet', correct: false}
        ]
    },
    {
        question: 'What season did Monica and Chandler get married in Friends?',
        answers: [
            { text: 'Season 7', correct: true},
            { text: 'Season 5', correct: false},
            { text: 'Season 6', correct: false},
            { text: 'Season 10', correct: false}
        ]
    },
    {
        question: 'Did Sheldon ever win a Nobel prize in the show the Big Bang Theory?',
        answers: [
            { text: 'Yes', correct: true},
            { text: 'No', correct: false}
        ]
    },
    {
        question: 'In the anime One Piece the main protagonist are pirates, what is the name of the pirate crew?',
        answers: [
            { text: 'Strawhat Pirates', correct: true},
            { text: 'Heart Pirates', correct: false},
            { text: 'Kid Pirates', correct: false},
            { text: 'Red Hair Pirates', correct: false}
        ]
    },
    {
        question: 'Who played Captain Ray Holt in the show Brooklyn Nine-Nine?',
        answers: [
            { text: 'Andre Braugher', correct: true},
            { text: 'Terry Crews', correct: false},
            { text: 'Andy Samburg', correct: false},
            { text: 'Joe Lo Truglio', correct: false}
        ]
    },
    {
        question: 'Where does Michael Scott move to start his new life with Holly in the Office?',
        answers: [
            { text: 'Boulder, Colorado', correct: true},
            { text: 'Boone, North Carolina', correct: false},
            { text: 'Bozeman, Montana', correct: false},
            { text: 'Enid, Oklahoma', correct: false}
        ]
    },
    {
        question: 'When did Sheldon meet Amy in the Big Bang Theory?',
        answers: [
            { text: 'Season 3', correct: true},
            { text: 'Season 2', correct: false},
            { text: 'Season 4', correct: false},
            { text: 'Season 5', correct: false}
        ]
    },
    {
        question: 'What is the name of Ross and Rachels daughter in Friends?',
        answers: [
            { text: 'Emma', correct: true},
            { text: 'Ella', correct: false},
            { text: 'Elizabeth', correct: false},
            { text: 'Isabella', correct: false}
        ]
    },
    {
        question: 'What is the name of Captain Ray Holts husband in Brooklyn Nine-Nine?',
        answers: [
            { text: 'Kevin', correct: true},
            { text: 'Jake', correct: false},
            { text: 'David', correct: false},
            { text: 'Michael', correct: false}
        ]
    },
    {
        question: 'What season did Howard and Bernadette have their first child in the Big Bang Theory?',
        answers: [
            { text: 'Season 9', correct: true},
            { text: 'Season 7', correct: false},
            { text: 'Season 5', correct: false},
            { text: 'Season 11', correct: false}
        ]
    }
]