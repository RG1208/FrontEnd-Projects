const questions = [
    {
        question: "Which is the Smalles country in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest animal?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Lion", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct: true },
        ]
    },
    {
        question: "Which is the Smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Europe", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
        ]
    }
];

const QuestionElement = document.getElementsByClassName("question");
const Answers = document.getElementsByClassName("answers");
const NextButton = document.getElementsByClassName("next");