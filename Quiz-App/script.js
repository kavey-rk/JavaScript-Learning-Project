const questions = [
    {
        question: "What is the natural compound present in green plants that gives them their colour?",
        answers: [
            {text:"Luteolin", correct:"false"},
            {text:"Chlorophyll", correct:"true"},
            {text:"Quercetin", correct:"false"},
            {text:"Rutin", correct:"false"},
        ]
    },
    {
        question: "What hormone regulates blood sugar levels by allowing cells to absorb and use glucose for energy??",
        answers: [
            {text:"Insulin", correct:"true"},
            {text:"Acetycolin", correct:"false"},
            {text:"G-coupled", correct:"false"},
            {text:"Nuclear", correct:"false"},
        ]
    },
    {
        question: "Whis one are not the four main chambers of the human heart?",
        answers: [
            {text:"The left atrium", correct:"false"},
            {text:"The right atrium", correct:"false"},
            {text:"The left ventricle", correct:"false"},
            {text:"The right supercova", correct:"true"},
        ]
    },
    {
        question: "Where is your heart?",
        answers: [
            {text:"Yeah", correct:"false"},
            {text:"Jeaoh", correct:"false"},
            {text:"Feaoh", correct:"false"},
            {text:"Keaoh", correct:"true"},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-buttons");//document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display ="block";
}

function handlecNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handlecNextButton();
    }else{
        startQuiz();
    } 
});
startQuiz();
