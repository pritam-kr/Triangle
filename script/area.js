const triangleOption = document.querySelectorAll('li');
const btnSubmit = document.querySelectorAll('.btn-submit');
const pOneBase = document.querySelector('#p1-base');
const pOneHeight = document.querySelector('#p1-height')

// console.log(pOneBase, pOneHeight)

var result = '';

var twoSides = ''
triangleOption.forEach((each) => {
    // console.log(each)

    each.addEventListener('click', (el) => {
        // console.log(el.target.classList)
        if (el.target.classList[0] === "base-height") {
            document.querySelector('.problem1').style.display = 'flex'
            document.querySelector('.problem2').style.display = 'none'
            document.querySelector('.problem3').style.display = 'none'
            document.querySelector('.result').style.display = 'none'
        } else if (el.target.classList[0] === "three-side") {
            document.querySelector('.problem2').style.display = 'flex'
            document.querySelector('.problem1').style.display = 'none'
            document.querySelector('.problem3').style.display = 'none'
            document.querySelector('.result').style.display = 'none'
        } else {
            document.querySelector('.problem3').style.display = 'flex'
            document.querySelector('.problem1').style.display = 'none'
            document.querySelector('.problem2').style.display = 'none'
            document.querySelector('.result').style.display = 'none'
        }
    })
})

btnSubmit[0].addEventListener('click', (e) => {
    e.preventDefault()
    const b = pOneBase.value;
    const h = pOneHeight.value;
    result = (Number(b) * Number(h)) / 2
    showResult(result)
    document.querySelector('.result').style.display = 'flex'

})

btnSubmit[1].addEventListener('click', (e) => {
    e.preventDefault()
    const b = document.querySelector('#p2-base').value;
    const h = document.querySelector('#p2-height').value;
    const hy = document.querySelector('#p2-hypo').value;
    const s = (Number(b) + Number(h) + Number(hy)) / 2
    area = Math.sqrt(s * (s - b) * (s - h) * (s - hy))
    showResult(area)
    document.querySelector('.result').style.display = 'flex'
})

btnSubmit[2].addEventListener('click', (e) => {
    const b = document.querySelector('#p3-base').value;
    const h = document.querySelector('#p3-hypo').value;
    const angle = Number(document.querySelector('#p3-angle').value);
    areak = (Number(b) * Number(h) * Math.sin(angle * Math.PI / 180)) / 2;
    showResult(areak)
    document.querySelector('.result').style.display = 'flex'
})





function showResult(e) {
    document.querySelector('.result').innerHTML = `<p class="show-result">The area of triangle is <span>${e} </span></p>`
}