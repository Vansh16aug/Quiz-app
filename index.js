const quizDB=[
{
    question:"Q1: Select the option to make a list that lists the items with numbers?",
    a:"OL",
    b:"DL",
    c:"UL",
    d:"None",
    ans:"ans1"
},
{
    question:"Q2: Select the option to make a list that lists the items with bullets?",
    a:"Dl",
    b:"Ol",
    c:"List",
    d:"None",
    ans:"ans1"
},
{
    question:"Q3: In CSS, what is the correct option to select all the tags on a page?",
    a:".p { }",
    b:"p { }",
    c:"<p> { }",
    d:"None",
    ans:"ans2"
},
{
    question:"Q4: In CSS,Select the property used to set the spacing in between lines of text?",
    a:"letter-spacing",
    b:"line-height",
    c:"spacing",
    d:"None",
    ans:"ans2"
},
{
    question:"Q5: Select the property used to create space between the element’s border and inner content?",
    a:"padding",
    b:"spacing",
    c:"margin",
    d:"None",
    ans:"ans1"
},
{
    question:"Q6: Select the property that is used to create spacing between HTML elements?",
    a:"spacing",
    b:"margin",
    c:"padding",
    d:"None",
    ans:"ans3"
}
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount=0;

let score=0;

const loadQuestion = () => {
    const questionList=quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;
}


loadQuestion();

const getCheckAnswer = () => {  

    let answer;

    answers.forEach((curAnsElem)=>{
      if(curAnsElem.checked){
        answer = curAnsElem.id;
      }
    });
    return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false)
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }

    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length}  🎉 </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;


        showScore.classList.remove('scoreArea');
    }


});