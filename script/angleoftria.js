// const angleOne = document.querySelector('#angle-one');
// const angleTwo = document.querySelector('#angle-two');
// const angleThree = document.querySelector('#angle-three');

const angleInput = document.querySelectorAll("input");
const form = document.querySelector(".angle-form");
const btn = document.querySelector(".btn");

var allAngle = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const angleA = Number(angleInput[0].value)
    const angleB = Number(angleInput[1].value)
    const angleC = Number(angleInput[2].value)

    // console.log(angleA, angleB, angleC)

    // if sum of the angle is equal to 180 then it can make a triangle

    if (angleA + angleB + angleC === 180) {
        document.querySelector(".result").innerHTML = `<div class="message"> Yess! These angles can make a triangle </div>`
    } else {
        document.querySelector(".result").innerHTML = `<div class="message">Sorry! These angles can not make a triangle </div>`
    }

    angleInput[0].value = ""
    angleInput[1].value = ""
    angleInput[2].value = ""

});
