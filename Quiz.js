const data = [
    {
        id: 1,
        question: "How do you make a large chest?",
        answers: [
        { answer: "Put 2 chests on top of each other", isCorrect: false},
        { answer: "Put 2 chests next to each other", isCorrect: true},
        { answer: "Buy a large chest from a librarian villager", isCorrect: false},
        { answer: "All my homies use shulker boxes", isCorrect: false}
        ]
    },
    {
        id: 2,
        question: "How many cobblestone blocks are needed in total to craft a furnace?",
        answers: [
        { answer: "8", isCorrect: true},
        { answer: "4", isCorrect: false},
        { answer: "9", isCorrect: false},
        { answer: "6", isCorrect: false}
        ]
    },
    {
        id: 3,
        question: "What is the nickname of Minecraft creator?",
        answers: [
        { answer: "3abood", isCorrect: true},
        { answer: "Bill gates", isCorrect: false},
        { answer: "Notch", isCorrect: true},
        { answer: "Creeper", isCorrect: false}
        ]
    },
    {
        id: 4,
        question: "What was the original name of Minecraft when it was first published?",
        answers: [
        { answer: "Mine Crafter", isCorrect: false},
        { answer: "Cave Game", isCorrect: true},
        { answer: "Minecart", isCorrect: false},
        { answer: "Combostar", isCorrect: false}
        ]
    },
    {
        id: 5,
        question: "Which one of these animals can be ridden with saddle along with horses and mules?",
        answers: [
        { answer: "Bee", isCorrect: false},
        { answer: "Goat", isCorrect: false},
        { answer: "Phantom", isCorrect: false},
        { answer: "Pig", isCorrect: true}
        ]
    },
    {
        id: 6,
        question: "Which material creates the strongest armor or weapons?",
        answers: [
        { answer: "Gold", isCorrect: false},
        { answer: "Diamond", isCorrect: false},
        { answer: "Netherite", isCorrect: true},
        { answer: "Iron", isCorrect: false}
        ]
    },
    {
        id: 7,
        question: "What happens when a creeper gets struck by lightning?",
        answers: [
        { answer: "It dies instantly", isCorrect: false},
        { answer: "It becomes charged, and hits you with lightning when it explodes", isCorrect: false},
        { answer: "Run brother Run...", isCorrect: false},
        { answer: "Time for some heads", isCorrect: true}
        ]
    },
    {
        id: 8,
        question: "How long are Minecraft's day and night combined in real-time?",
        answers: [
        { answer: "25 Minutes", isCorrect: false},
        { answer: "20 Minutes", isCorrect: true},
        { answer: "10 Minutes", isCorrect: false},
        { answer: "18 Minutes", isCorrect: false}
        ]
    },
    {
        id: 9,
        question: "What is Minecraft developers studio called?",
        answers: [
        { answer: "Eloctronic Arts", isCorrect: false},
        { answer: "Mojang", isCorrect: true},
        { answer: "Activision", isCorrect: false},
        { answer: "3abood Productions", isCorrect: true}
        ]
    },
    {
        id: 10,
        question: "What happens when you place a bed in the nether dimension?",
        answers: [
        { answer: "You can use it as a respawn point in the nether", isCorrect: false},
        { answer: "It disappears", isCorrect: false},
        { answer: "You can't", isCorrect: false},
        { answer: "It explodes", isCorrect: true}
        ]
    },
];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer;

const playAgain = ()=>{
  qIndex = 0
  correctCount = 0
  wrongCount = 0
  total = 0
 showQuestion(qIndex)
}

play.addEventListener("click", ()=>{
    resultScreen.style.display= "none"
    gameScreen.style.display= "block"
    playAgain()
})

const showResult = () => {
    resultScreen.style.display= "block"
    gameScreen.style.display= "none"

    resultScreen.querySelector(".correct").textContent = 
    `Correct Answer: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent = 
    `Wrong Answer: ${wrongCount}`

    resultScreen.querySelector(".score").textContent = 
    `Score: ${(correctCount) * 10}`
}

const showQuestion = (qNumber) => {
 if(qIndex === data.length) return showResult()   
 selectedAnswer = null;   
 question.textContent = data[qNumber].question   
 answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
    `
     <div class="answer">
      <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
      <label for="1">${item.answer}</label> 
     </div>
    `
 ).join("");

 selectAnswer()
}

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el=> {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if(selectedAnswer !== null){
         selectedAnswer === "true" ? correctCount++ : wrongCount++
         qIndex++
         showQuestion(qIndex)
        }else alert("Select an answer!")
    })
}

showQuestion(qIndex)
submitAnswer()
