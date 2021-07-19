const btnBoxOne = document.querySelector('.box1');

btnBoxOne.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.triangle').style.display = 'none'
})

const angleOne = document.querySelector('#angle-one');
const angleTwo = document.querySelector('#angle-two');
const angleThree = document.querySelector('#angle-three');

