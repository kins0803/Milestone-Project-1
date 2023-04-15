// elements for Random Trivia
const startRandomButton = document.getElementById('1-random')
const nextRandomButton = document.getElementById('next-button')
const randomQuestionContainerElement = document.getElementById
('answer-buttons')
const randomQuestionElement = document.getElementById('question')
const randomAnswerButtonsElement = document.getElementById
('answer-buttons')

let shuffledRandomQuestions, currentRandomQuestionIndex

startRandomButton.addEventListener('click', startRandomGame)
nextRandomButton.addEventListener('click', () => {
    currentRandomQuestionIndex++
    setNextRandomQuestion()
})

// functions for Random Trivia
function startRandomGame() {
    startRandomButton.classList.add('hidden')
    shuffledRandomQuestions = randomQuestions.sort(() => Math.random() - .5)
    currentRandomQuestionIndex = 0
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
    nextRandomButton.classList.add('hidden')
    while (randomAnswerButtonsElement.firstChild) {
        randomAnswerButtonsElement.removeChild(randomAnswerButtonsElement.firstChild)
    }
}

function selectRandomAnswer(e) {
    const selectedRandomButton = e.target
    const correctRandom = selectedRandomButton.dataset.correct
    setRandomStatatusClass(document.body, correct)
    Array.from(randomAnswerButtonsElement.children).forEach(button => {
        setRandomStatatusClass(button, button.dataset.correct)
    })
    if (shuffledRandomQuestions > currentRandomQuestionIndex + 1) {
        nextRandomButton.classList.remove('hidden')
    } else {
        startRandomButton.innerText = 'Restart'
        startRandomButton.classList.remove('hidden')
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
            { text: 'Athena', correct: true},
            { text: 'Persephone', correct: false},
            { text: 'Aphrodite', correct: false},
            { text: 'Poseidon', correct: false}
        ]
    },
    {
        question: 'What is the nail polish brand created by simply nail logical, a YouTuber?',
        answers: [
            { text: 'Holo Taco', correct: true},
            { text: 'Beyond Polish', correct: false},
            { text: 'Cupcake Polish', correct: false},
            { text: 'Cirque Colors', correct: false}
        ]
    },
    {
        question: 'What is the name of the character that died in the book One of Us is Lying?',
        answers: [
            { text: 'Simon', correct: true},
            { text: 'Addy', correct: false},
            { text: 'Nate', correct: false},
            { text: 'Bronwyn', correct: false}
        ]
    },
    {
        question: 'Who wrote the book Matched?',
        answers: [
            { text: 'Ally Condie', correct: true},
            { text: 'Karen M. McManus', correct: false},
            { text: 'Fran Hauser', correct: false},
            { text: 'JK Rowling', correct: false}
        ]
    },
    {
        question: 'Who is the founder of Apple?',
        answers: [
            { text: 'Steve Jobs', correct: true},
            { text: 'Mark Zuckerberg', correct: false},
            { text: 'Jeff Bezos', correct: false},
            { text: 'Bill Gates', correct: false}
        ]
    },
    {
        question: 'Who was the 16th president of the United States?',
        answers: [
            { text: 'Abraham Lincoln', correct: true},
            { text: 'Andrew Johnson', correct: false},
            { text: 'James Buchanan', correct: false},
            { text: 'Andrew Jackson', correct: false}
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
            { text: 'Sabertooth', correct: true},
            { text: 'Blue Pegasus', correct: false},
            { text: 'Fairy Tail', correct: false},
            { text: 'Lamia Scale', correct: false}
        ]
    },
    {
        question: 'Is Marijuana legal in North Carolina?',
        answers: [
            { text: 'Yes fully legal, above the legal age', correct: true},
            { text: 'Not at all', correct: false},
            { text: 'Yes, for medical use', correct: false},
            { text: 'Yes, but only some strands', correct: false}
        ]
    }
]