// elements for Sports Trivia
const sportsStartButton = document.getElementById('1-sports')
const sportsNextButton = document.getElementById('next-button')
const sportsQuestionContainerElement = document.getElementById('answer-buttons')
const sportsQuestionElement = document.getElementById('question')
const sportsAnswerButtonsElement = document.getElementById('answer-buttons')
// const sportsLeaderboardButton = document.getElementById('leaderboard-button')
const sportsHomeButton = document.getElementById('home-button')
const sportsQuestionCounterText = document.getElementById('question-counter')
const sportsScoreText = document.getElementById('score')


let shuffledSportsQuestions, currentSportsQuestionIndex


sportsStartButton.addEventListener('click', startSportsGame)
sportsNextButton.addEventListener('click', () => {
   currentSportsQuestionIndex++
   setNextSportsQuestion()
})


let sportsScore = 0
let sportsQuestionCounter = 0


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


// functions for Sports Trivia
function startSportsGame() {
   sportsScore = 0
//    sportsQuestionCounterText.innerText = sportsQuestionCounter + `${sportsQuestionCounter}/${MAX_QUESTIONS}`
   sportsStartButton.classList.add('hidden')
   shuffledSportsQuestions = sportsQuestions.sort(() => Math.random() - .5)
   currentSportsQuestionIndex = 1
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
   sportsNextButton.classList.add('hidden')
   while (sportsAnswerButtonsElement.firstChild) {
       sportsAnswerButtonsElement.removeChild(sportsAnswerButtonsElement.firstChild)
   }
}


function selectSportsAnswer(e) {
   const selectedSportsButton = e.target
   const correctSports = selectedSportsButton.dataset.correct
   setSportsScore(document.body, correctSports)
   Array.from(sportsAnswerButtonsElement.children).forEach(button => {
       setSportsStatatusClass(button, button.dataset.correct)
   })
   if (shuffledSportsQuestions.length > currentSportsQuestionIndex + 1) {
       sportsNextButton.classList.remove('hidden')
   } else {
    //    sportsLeaderboardButton.classList.remove('hidden')
       sportsHomeButton.classList.remove('hidden')
   }
}

function setSportsScore(element, correct) {
   if (correct) {
       incrementScore()
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


function incrementScore() {
   sportsScore += CORRECT_BONUS;
   sportsScoreText.innerText = sportsScore;
};

// questions for Sports Trivia
const sportsQuestions = [
    {
        question: 'Who has the all time leading score in the nba?',
        answers: [
            { text: 'Kobe Bryant', correct: false},
            { text: 'Michael Jordan', correct: false},
            { text: 'LeBron James', correct: true},
            { text: 'Stephen Curry', correct: false}
        ]
    },
    {
        question: 'Who holds the all-time home run leader in the MLB?',
        answers: [
            { text: 'Mike Trout', correct: false},
            { text: 'Adam Duvall', correct: false},
            { text: 'Wander Franco', correct: false},
            { text: 'Barry Bonds', correct: true}
        ]
    },
    {
        question: 'Which quarterback has won the most super bowls in the NFL?',
        answers: [
            { text: 'Kirk Cousins', correct: false},
            { text: 'Tom Brady', correct: true},
            { text: 'Aaron Rodgers', correct: false},
            { text: 'Matt Ryan', correct: false}
        ]
    },
    {
        question: 'Which mens college basketball team has won the most national championships in NCAA Divison 1?',
        answers: [
            { text: 'Kentucky', correct: false},
            { text: 'North Carolina', correct: false},
            { text: 'UCLA', correct: true},
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
            { text: '50', correct: false},
            { text: '38', correct: false},
            { text: '44', correct: true},
            { text: '47', correct: false}
        ]
    },
    {
        question: ' Who has won more tennis grand slam titles, Venus Williams or Serena Williams?',
        answers: [
            { text: 'Venus Williams', correct: false},
            { text: 'Serena Williams', correct: true}
        ]
    },
    {
        question: 'What country has competed the most times in the Summer Olympics yet has not won a gold medal?',
        answers: [
            { text: 'America', correct: false},
            { text: 'The Philippines', correct: true},
            { text: 'Brazil', correct: false},
            { text: 'Australia', correct: false}
        ]
    },
    {
        question: 'What is the national sport of Canada?',
        answers: [
            { text: 'Hockey', correct: false},
            { text: 'Figure Skating', correct: false},
            { text: 'Lacrosse', correct: true},
            { text: 'Baseball', correct: false}
        ]
    },
    {
        question: 'How many times has UCLA won the mens Division 1 NCAA national championships?',
        answers: [
            { text: '13', correct: false},
            { text: '9', correct: false},
            { text: '7', correct: false},
            { text: '11', correct: true}
        ]
    }
]