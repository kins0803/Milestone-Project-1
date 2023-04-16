// elements for TvShows Trivia
const tvShowsStartButton = document.getElementById('1-tvShows')
const tvShowsNextButton = document.getElementById('next-button')
const tvShowsQuestionContainerElement = document.getElementById('answer-buttons')
const tvShowsQuestionElement = document.getElementById('question')
const tvShowsAnswerButtonsElement = document.getElementById('answer-buttons')
// const tvShowsLeaderboardButton = document.getElementById('leaderboard-button')
const tvShowsHomeButton = document.getElementById('home-button')
const tvShowsQuestionCounterText = document.getElementById('question-counter')
const tvShowsScoreText = document.getElementById('score')


let shuffledTvShowsQuestions, currentTvShowsQuestionIndex


tvShowsStartButton.addEventListener('click', startTvShowsGame)
tvShowsNextButton.addEventListener('click', () => {
   currentTvShowsQuestionIndex++
   setNextTvShowsQuestion()
})


let tvShowsScore = 0
let tvShowsQuestionCounter = 0


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


// functions for TvShows Trivia
function startTvShowsGame() {
   tvShowsScore = 0
//    tvShowsQuestionCounterText.innerText = tvShowsQuestionCounter + `${tvShowsQuestionCounter}/${MAX_QUESTIONS}`
   tvShowsStartButton.classList.add('hidden')
   shuffledTvShowsQuestions = tvShowsQuestions.sort(() => Math.random() - .5)
   currentTvShowsQuestionIndex = 1
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
   tvShowsNextButton.classList.add('hidden')
   while (tvShowsAnswerButtonsElement.firstChild) {
       tvShowsAnswerButtonsElement.removeChild(tvShowsAnswerButtonsElement.firstChild)
   }
}


function selectTvShowsAnswer(e) {
   const selectedTvShowsButton = e.target
   const correctTvShows = selectedTvShowsButton.dataset.correct
   setTvShowsScore(document.body, correctTvShows)
   Array.from(tvShowsAnswerButtonsElement.children).forEach(button => {
       setTvShowsStatatusClass(button, button.dataset.correct)
   })
   if (shuffledTvShowsQuestions.length > currentTvShowsQuestionIndex + 1) {
       tvShowsNextButton.classList.remove('hidden')
   } else {
    //    tvShowsLeaderboardButton.classList.remove('hidden')
       tvShowsHomeButton.classList.remove('hidden')
   }
}

function setTvShowsScore(element, correct) {
   if (correct) {
       incrementScore()
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


function incrementScore() {
   tvShowsScore += CORRECT_BONUS;
   tvShowsScoreText.innerText = tvShowsScore;
};

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