const questionForm = document.forms[0]
// console.log(questionForm)
const questionDivs = document.querySelectorAll('.question-div')
// console.log(questionDivs)
const submitQuiz = document.querySelector('#submit-quiz');


// console.log(submitQuiz)

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
let yourScore= 0;

questionForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    // form data
    const formData = new FormData(questionForm)

    let indx = 0;

    for(let entry of formData){
        if(entry[1] == correctAns[indx]){
             console.log(entry[1])
            // background change of question divs
            questionDivs[indx].className = 'radio-div right-ans'
            yourScore++;
            console.log(yourScore)
        }else{
            questionDivs[indx].className = 'radio-div worng-ans'
        }
        indx++
    }
    
   submitQuiz.style.display = 'none'
    document.querySelector('.Score').innerHTML = `${yourScore}`
    
})


const userName = document.querySelector('#input-name');
const btnGo = document.querySelector('.btn-go');

btnGo.addEventListener('click', (el) => {
    el.preventDefault()

    const userNameValue = userName.value;
   if(userNameValue){
    //    console.log(userNameValue)
       document.querySelector('.auth-container').style.display = 'none'
       document.querySelector('.quiz-container').style.display = 'flex'
      document.querySelector('.name').innerHTML = `${userNameValue}`
      document.querySelector('nav').style.display = 'flex';
   }
})


