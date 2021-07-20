const inputSide = document.querySelectorAll('input');
const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    var sideHeight = Number(inputSide[0].value);
    var sideBase = Number(inputSide[1].value);

    // find hypho

    var hypotenuse = Math.sqrt(sideHeight*sideHeight + sideBase*sideBase)

    document.querySelector('.result').innerHTML = hypotenuse;
   
})