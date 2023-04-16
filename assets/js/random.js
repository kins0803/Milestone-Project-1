// elements for Random Trivia
const randomStartButton = document.getElementById('1-randoms')
const randomNextButton = document.getElementById('next-button')
const randomQuestionContainerElement = document.getElementById('answer-buttons')
const randomQuestionElement = document.getElementById('question')
const randomAnswerButtonsElement = document.getElementById('answer-buttons')
// const randomLeaderboardButton = document.getElementById('leaderboard-button')
const randomHomeButton = document.getElementById('home-button')
const randomQuestionCounterText = document.getElementById('question-counter')
const randomScoreText = document.getElementById('score')


let shuffledRandomQuestions, currentRandomQuestionIndex


randomStartButton.addEventListener('click', startRandomGame)
randomNextButton.addEventListener('click', () => {
   currentRandomQuestionIndex++
   setNextRandomQuestion()
})


let randomScore = 0
let randomQuestionCounter = 0


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


// functions for Random Trivia
function startRandomGame() {
   randomScore = 0
//    randomQuestionCounterText.innerText = randomQuestionCounter + `${randomQuestionCounter}/${MAX_QUESTIONS}`
   randomStartButton.classList.add('hidden')
   shuffledRandomQuestions = randomQuestions.sort(() => Math.random() - .5)
   currentRandomQuestionIndex = 1
   randomQuestionContainerElement.classList.remove('hidden')
   setNextRandomQuestion()
}


function setNextRandomQuestion() {
   randomReset()
   showRandomQuestion(shuffledRandomQuestions[currentRandomQuestionIndex])
}


function showRandomQuestion(question) {
   randomQuestionElement.innerText = question.question
   question.answers.forEach(answer => {
       const button = document.createElement('button')
       button.innerText = answer.text
       button.classList.add('btns')
       if (answer.correct) {
           button.dataset.correct = answer.correct
       }
       button.addEventListener('click', selectRandomAnswer)
       randomAnswerButtonsElement.appendChild(button)
   })
}


function randomReset() {
   randomNextButton.classList.add('hidden')
   while (randomAnswerButtonsElement.firstChild) {
       randomAnswerButtonsElement.removeChild(randomAnswerButtonsElement.firstChild)
   }
}


function selectRandomAnswer(e) {
   const selectedRandomButton = e.target
   const correctRandom = selectedRandomButton.dataset.correct
   setRandomScore(document.body, correctRandom)
   Array.from(randomAnswerButtonsElement.children).forEach(button => {
       setRandomStatatusClass(button, button.dataset.correct)
   })
   if (shuffledRandomQuestions.length > currentRandomQuestionIndex + 1) {
       randomNextButton.classList.remove('hidden')
   } else {
    //    randomLeaderboardButton.classList.remove('hidden')
       randomHomeButton.classList.remove('hidden')
   }
}

function setRandomScore(element, correct) {
   if (correct) {
       incrementScore()
   }
}


function setRandomStatatusClass(element, correct) {
   clearRandomStatusClass(element)
   if (correct) {
       element.classList.add('correct')
   } else {
       element.classList.add('wrong')
   }
}


function clearRandomStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}


function incrementScore() {
   randomScore += CORRECT_BONUS;
   randomScoreText.innerText = randomScore;
};

// questions for Random Trivia
const randomQuestions = [
    {
        question: 'Persephone is Hades niece. True or False',
        answers: [
            { text: 'True', correct: true},
            { text: 'False', correct: false}
        ]
    },
    {
        question: 'Who cursed Medusa to turn into a monster?',
        answers: [
            { text: 'Aphrodite', correct: false},
            { text: 'Athena', correct: true},
            { text: 'Persephone', correct: false},
            { text: 'Poseidon', correct: false}
        ]
    },
    {
        question: 'What is the nail polish brand created by simply nail logical, a YouTuber?',
        answers: [
            { text: 'Beyond Polish', correct: false},
            { text: 'Cupcake Polish', correct: false},
            { text: 'Holo Taco', correct: true},
            { text: 'Cirque Colors', correct: false}
        ]
    },
    {
        question: 'What is the name of the character that died in the book One of Us is Lying?',
        answers: [
            { text: 'Addy', correct: false},
            { text: 'Nate', correct: false},
            { text: 'Bronwyn', correct: false},
            { text: 'Simon', correct: true}
        ]
    },
    {
        question: 'Who wrote the book Matched?',
        answers: [
            { text: 'Karen M. McManus', correct: false},
            { text: 'Fran Hauser', correct: false},
            { text: 'Ally Condie', correct: true},
            { text: 'JK Rowling', correct: false}
        ]
    },
    {
        question: 'Who is the founder of Apple?',
        answers: [
            { text: 'Mark Zuckerberg', correct: false},
            { text: 'Jeff Bezos', correct: false},
            { text: 'Steve Jobs', correct: true},
            { text: 'Bill Gates', correct: false}
        ]
    },
    {
        question: 'Who was the 16th president of the United States?',
        answers: [
            { text: 'Andrew Johnson', correct: false},
            { text: 'James Buchanan', correct: false},
            { text: 'Andrew Jackson', correct: false},
            { text: 'Abraham Lincoln', correct: true}
        ]
    },
    {
        question: 'What is the name of the Strawhat Pirates second ship in One Piece?',
        answers: [
            { text: 'The Thousand Sunny', correct: true},
            { text: 'The Going Merry', correct: false},
            { text: 'The Polar Tang', correct: false},
            { text: 'Victoria Punk', correct: false}
        ]
    },
    {
        question: 'What guide is Sting the master of in Fairy Tail?',
        answers: [
            { text: 'Blue Pegasus', correct: false},
            { text: 'Fairy Tail', correct: false},
            { text: 'Sabertooth', correct: true},
            { text: 'Lamia Scale', correct: false}
        ]
    },
    {
        question: 'Is Marijuana legal in North Carolina?',
        answers: [
            { text: 'Not at all', correct: false},
            { text: 'Yes, for medical use', correct: false},
            { text: 'Yes fully legal, above the legal age', correct: true},
            { text: 'Yes, but only some strands', correct: false}
        ]
    }
]