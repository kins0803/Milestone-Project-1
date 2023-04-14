const animalButton = document.getElementById('1-animals')
const animalQuestionContainerElement = document.getElementById('answer-buttons')
const animalQuestionElement = document.getElementById('question')
const animalanswerButtonsElement = document.getElementById('answer-buttons')

let shuffledAnimalQuestions, currentAnimalQuestionIndex

function startAnimalGame() {
    console.log('started')
    animalButton.classList.add('hidden')
    // shuffledAnimalQuestions = showanimalQuestion.sort(() => Math.random() - .5)
    currentAnimalQuestionIndex = 0
    animalQuestionContainerElement.classList.remove('hidden')
    setNextAnimalQuestion()
}


animalButton.addEventListener('click', startAnimalGame)

function setNextAnimalQuestion() {

}

function showanimalQuestion(question) {
    animalQuestionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btns')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnimalAnswer)
        animalanswerButtonsElement.appendChild(button)
    })
}

function selectAnimalAnswer(e) {

}

// const animalQuestions = [
//     {
//         question: 'Which has the strongest bite force?'
//         answers: [
//             { text: 'Saltwater Crocodile', correct: true},
//             { text: 'Hippopotamus', correct: false },
//             { text: 'Lion', correct: false },
//             { text: 'American Alligator', correct: false },
//         ]
//     },
//     {
//         question: 'How '
//     }
// ]