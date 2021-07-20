// const angleOne = document.querySelector('#angle-one');
// const angleTwo = document.querySelector('#angle-two');
// const angleThree = document.querySelector('#angle-three');

const angleInput = document.querySelectorAll("input");
const form = document.querySelector(".angle-form");
const btn = document.querySelector(".btn");

var allAngle = [];

btn.addEventListener("click", (e) => {
    e.preventDefault();

    for (i = 0; i < angleInput.length; i++) {
        allAngle[i] = Number(angleInput[i].value);
    }
    var sum = 0;
    allAngle.map((el) => {
        sum = sum + el;
        console.log(sum);

        if (sum === 180) {
            document.querySelector(".result").innerHTML =
                "Yess! These angles can make a triangle";
        } else {
            document.querySelector(".result").innerHTML =
                "Sorry! These angles can not make a triangle";
        }
    });
});
